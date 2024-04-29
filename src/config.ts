import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const config = {
  port: process.env.PORT || 3000, 
  secret: process.env.JWT_SECRET || 'default-secret', 
};

export default config;