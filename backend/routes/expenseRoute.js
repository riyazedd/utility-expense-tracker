import express from 'express';
const router = express.Router();
import { createExpense, getExpenses, getExpenseById, updateExpense, deleteExpense} from '../controller/expenseController.js';


router.get('/', getExpenses);
router.get('/:id', getExpenseById);
router.post('/', createExpense);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);

export default router;