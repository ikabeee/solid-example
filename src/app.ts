import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import authRoutes from './modules/auth/routes/auth.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/auth', authRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 