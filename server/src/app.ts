import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes';
import listRoutes from './routes/listRoutes';

dotenv.config();

const app = express();
app.use(express.json());

// Conexión a MongoDB
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

// Configuración de rutas sin prefijo '/api'
app.use(userRoutes);
app.use(listRoutes);


// Inicia el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});