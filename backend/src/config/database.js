import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const SCHEMA = process.env.DB_SCHEMA || 'public';
let _pool = null;

export const getPool = () => _pool;

export const initDB = async () => {
  _pool = new pg.Pool({
    host:     process.env.DB_HOST,
    port:     parseInt(process.env.DB_PORT),
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl:      { rejectUnauthorized: false },
  });

  _pool.on('error', (err) => console.error('Pool error:', err.message));

  await _pool.query('CREATE SCHEMA IF NOT EXISTS ' + SCHEMA);
  await _pool.query(
    'CREATE TABLE IF NOT EXISTS ' + SCHEMA + '.contacts (' +
    'id SERIAL PRIMARY KEY, ' +
    'name VARCHAR(255) NOT NULL, ' +
    'email VARCHAR(255) NOT NULL, ' +
    'message TEXT NOT NULL, ' +
    'created_at TIMESTAMPTZ DEFAULT NOW(), ' +
    'updated_at TIMESTAMPTZ DEFAULT NOW())'
  );
  console.log('PostgreSQL [schema: ' + SCHEMA + '] conectado - tablas listas');
};