import { Router } from 'express';
import { createUser } from '../controllers/userController';  // Asegúrate de que este método esté exportado correctamente

const router: Router = Router();  // Aseguramos que router tiene el tipo correcto

router.get("/users", async (req, res) => {
  res.send("API is working!");
});

router.post('/register', createUser);  // Usamos el controlador para manejar la solicitud POST



export default router;
