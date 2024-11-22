import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user';

const router: Router = Router();

router.post('/register', async (req: Request, res: Response): Promise<Response> => {
  console.log('POST /users/register reached');
  const { username, name, lastname, email, password } = req.body;
  console.log('Request body:', req.body);

  if (!username || !name || !lastname || !email || !password) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Password hashed');
    const newUser = new User({
      username,
      name,
      lastname,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log('User saved to database');
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ message: 'Error en el servidor', error });
  }
});


export default router;

