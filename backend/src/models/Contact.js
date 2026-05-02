import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'El email es obligatorio'],
    match: [/\S+@\S+\.\S+/, 'Email inválido'],
    lowercase: true,
  },
  message: {
    type: String,
    required: [true, 'El mensaje no puede estar vacío'],
    trim: true,
  },
}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);
