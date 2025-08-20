import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    date:{
        type:Date
    },
    current_unit:{
        type:Number
    },
    previous_unit:{
        type:Number
    },
    total_unit:{
        type:Number
    },
    total_electricity_price:{
        type:Number
    },
    water_price:{
        type:Number
    },
    waste_price:{
        type:Number
    },
    total_expense:{
        type:Number
    }
});

const Expense = mongoose.model("Expense",expenseSchema);

export default Expense;