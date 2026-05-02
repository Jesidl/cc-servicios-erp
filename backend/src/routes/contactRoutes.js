import express from 'express';
import { body } from 'express-validator';
import { createContact, getContacts } from '../controllers/contactController.js';

const router = express.Router();

const validate = [
  body('name').notEmpty().withMessage('El nombre es obligatorio').trim(),
  body('email').isEmail().withMessage('Email inválido').normalizeEmail(),
  body('message').notEmpty().withMessage('El mensaje no puede estar vacío').trim(),
];

router.post('/', validate, createContact);
router.get('/all', getContacts);

export default router;
