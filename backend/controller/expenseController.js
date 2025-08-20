import Expense from "../models/expenseModel.js";

const createExpense = async (req, res) => {
    const {
        date,
        current_unit,
        previous_unit, 
        total_unit,
        total_electricity_price,
        water_price,
        waste_price,
        total_expense
    } = req.body;
    
    const expense = new Expense({
        date,
        current_unit,
        previous_unit,
        total_unit,
        total_electricity_price,
        water_price,
        waste_price,
        total_expense
    })

    const createdExpense = await expense.save();
    res.status(201).json(createdExpense);
}

const getExpenses = async (req, res) => {
    const expenses = await Expense.find({});
    res.json(expenses);
}

const getExpenseById = async (req, res) => {
    const expense = await Expense.findById(req.params.id);
    if (expense) {
        res.json(expense);
    } else {
        res.status(404).json({ message: 'Expense not found' });
    }
}

const updateExpense = async (req, res) => {
    const {
        date,
        current_unit,
        previous_unit, 
        total_unit,
        total_electricity_price,
        water_price,
        waste_price,
        total_expense
    } = req.body;
    const expense = await Expense.findById(req.params.id);
    if (expense) {
        expense.date = date || expense.date;
        expense.current_unit = current_unit || expense.current_unit;
        expense.previous_unit = previous_unit || expense.previous_unit;
        expense.total_unit = total_unit || expense.total_unit;
        expense.total_electricity_price = total_electricity_price || expense.total_electricity_price;
        expense.water_price = water_price || expense.water_price;
        expense.waste_price = waste_price || expense.waste_price;
        expense.total_expense = total_expense || expense.total_expense;

        const updatedExpense = await expense.save();
        res.json(updatedExpense);
    } else {
        res.status(404).json({ message: 'Expense not found' });
    }
}

const deleteExpense = async (req, res) => {
    const expense = await Expense.findById(req.params.id);
    if (expense) {
        await expense.remove();
        res.json({ message: 'Expense removed' });
    } else {
        res.status(404).json({ message: 'Expense not found' });
    }
}

export { createExpense, getExpenses, getExpenseById , updateExpense, deleteExpense };