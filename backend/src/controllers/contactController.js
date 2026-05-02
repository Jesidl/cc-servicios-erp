import { getPool, SCHEMA } from '../config/database.js';
import { validationResult } from 'express-validator';

export const createContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });
  try {
    const { name, email, message } = req.body;
    const result = await getPool().query(
      'INSERT INTO ' + SCHEMA + '.contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *',
      [name, email, message]
    );
    res.status(201).json({ success: true, message: 'Mensaje enviado. Nos pondremos en contacto pronto.', contact: result.rows[0] });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: 'Error al guardar el mensaje.' });
  }
};

export const getContacts = async (_req, res) => {
  try {
    const result = await getPool().query('SELECT * FROM ' + SCHEMA + '.contacts ORDER BY created_at DESC');
    res.json({ success: true, count: result.rows.length, contacts: result.rows });
  } catch (e) {
    res.status(500).json({ success: false, message: 'Error al obtener mensajes.' });
  }
};