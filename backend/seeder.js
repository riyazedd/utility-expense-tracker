import mongoose from "mongoose";
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Expense from './models/expenseModel.js';
import expenses from './data/expense.js';
dotenv.config();

connectDB();

const insertData = async () => {
    try{
        await Expense.deleteMany();
        const createdExpenses = await Expense.insertMany(expenses);
        console.log('Data Imported: ', createdExpenses.length);
        process.exit();
    }catch{
        console.error('Error with data import');
        process.exit(1);
    }
}

const destroyData = async () => {
    try{
        await Expense.deleteMany();
        console.log('Data Destroyed');
        process.exit();
    }catch{
        console.error('Error with data destruction');
        process.exit(1);
    }
}

if(process.argv[2] === '-d'){
    destroyData();
}else{
    insertData();
}