import express from 'express';
import studentRoutes from './routes/studentRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import authRoutes from './routes/authRoutes.js';

import cors from "cors";

const app = express();


const FRONTEND_ORIGIN = 'http://localhost:5173';  
 
const FRONTEND_ORIGIN2 = 'http://127.0.0.1:5173';  


app.use(cors({  
    origin: [FRONTEND_ORIGIN,FRONTEND_ORIGIN2], // Exact origin (no *)  
    credentials: true, // Allow credentials (cookies)  
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods  
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow specific headers  
  }));  


app.use(express.json());

// Routes
app.use('/api/students', studentRoutes);

app.use('/api/auth', authRoutes);

// Error handler
app.use(errorHandler);

export default app;
