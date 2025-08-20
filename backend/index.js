import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();
import expenseRoutes from './routes/expenseRoute.js';

const app = express();

connectDB();

app.get('/',(req,res)=>{
    res.send("API is running");
})

app.use('/api/expenses', expenseRoutes);

app.listen(3000,()=>console.log('Server is running in port 3000'));