import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { validatePassword } from '../middleware/validators.js';

const router = express.Router();

router.post('/register',validatePassword, registerUser);
router.post('/login', loginUser);

export default router;

