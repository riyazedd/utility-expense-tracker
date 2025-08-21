import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();
import cors from 'cors';
import expenseRoutes from './routes/expenseRoute.js';

const app = express();

connectDB();

app.use(cors())
app.use(express.json());

app.use('/api/expenses', expenseRoutes);

app.listen(3000,()=>console.log('Server is running in port 3000'));