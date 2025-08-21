import React, { useState, useEffect, use } from 'react'
import {Link} from "react-router-dom"
import { ADToBS } from 'bikram-sambat-js'
import MonthCard from '../components/MonthCard'
import NepaliDatePickerComponent from '../components/NepaliDatePicker'
import API from '../API.jsx'

const Dashboard = () => {
  
  const now = new Date();
    
    const fixedDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    const bsToday = ADToBS(fixedDate);
//   console.log(utcToday)
  // console.log(bsToday)
  const [selectedDate, setSelectedDate] = useState(bsToday);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await API.get(`api/expenses`);
        setExpenses(response.data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, [])

  // console.log(expenses)



  // Filter expenses by selected year and month
  const [selectedYear] = selectedDate.split('-');
  const filteredExpenses = expenses.filter(exp => {
    if (!exp.date) return false;
    const [expYear] = exp.date.split('-');
    return expYear === selectedYear;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Dashboard</h1>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
        <NepaliDatePickerComponent value={selectedDate} onChange={setSelectedDate} />
        <Link to="/add_expense" className='w-2/3 justify-end flex'><button className="bg-gray-800 text-white px-6 py-2  rounded-lg shadow hover:bg-gray-700 transition-colors font-semibold">Add Expense</button></Link>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          filteredExpenses.length > 0 ? (
            filteredExpenses.map((expense, index) => (
              <MonthCard key={index} expenses={expense} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg">No expenses found for this month.</div>
          )
        }
      </div>
    </div>
  )
}

export default Dashboard
