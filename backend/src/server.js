import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDB } from './config/database.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();

const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map(o => o.trim())
  : ['http://localhost:5173'];

app.use(cors({
  origin: (origin, cb) => (!origin || allowedOrigins.includes(origin)) ? cb(null, true) : cb(new Error('CORS bloqueado')),
  credentials: true,
}));
app.use(express.json());
app.use('/api/contact', contactRoutes);
app.get('/', (_req, res) => res.json({ app: 'Cuentas Claras ERP', status: 'online', schema: process.env.DB_SCHEMA }));

const PORT = parseInt(process.env.PORT) || 5001;

initDB()
  .then(() => {
    const server = app.listen(PORT, () =>
      console.log('[ERP]' + ' Puerto ' + PORT + ' | Schema: ' + process.env.DB_SCHEMA)
    );
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.error('Puerto ' + PORT + ' ocupado. Ejecuta: Get-Process node | Stop-Process -Force');
      } else {
        console.error('Error servidor:', err.message);
      }
      process.exit(1);
    });
  })
  .catch(err => {
    console.error('No se pudo iniciar:', err.message);
    process.exit(1);
  });