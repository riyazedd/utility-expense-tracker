import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { ADToBS } from 'bikram-sambat-js'
import MonthCard from '../components/MonthCard'
import NepaliDatePickerComponent from '../components/NepaliDatePicker'

const Dashboard = () => {
  
  const now = new Date();
    
    const fixedDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    const bsToday = ADToBS(fixedDate);
//   console.log(utcToday)
  console.log(bsToday)
  const [selectedDate, setSelectedDate] = useState(bsToday);
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Dashboard</h1>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
        <NepaliDatePickerComponent value={selectedDate} onChange={setSelectedDate} />
        <Link to="/add_expense"><button className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-700 transition-colors font-semibold">Add Expense</button></Link>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <MonthCard />
        <MonthCard />
        <MonthCard />
      </div>
    </div>
  )
}

export default Dashboard
