import React from 'react'

const MonthCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs mx-auto flex flex-col gap-2 border border-gray-200">
      <h1 className="text-xl font-bold text-gray-800 mb-2">Month, Year</h1>
      <p className="text-gray-600 flex justify-between">
        <span>Total Electricity Unit:</span>
        <span className="font-semibold text-right">50</span>
      </p>
      <p className="text-blue-600 flex justify-between">
        <span>Electricity:</span>
        <span className="font-semibold text-right">Rs.600</span>
      </p>
      <p className="text-blue-400 flex justify-between">
        <span>Water:</span>
        <span className="font-semibold text-right">Rs.200</span>
      </p>
      <p className="text-green-500 flex justify-between">
        <span>Waste:</span>
        <span className="font-semibold text-right">Rs.100</span>
      </p>
      <p className="text-lg font-bold text-gray-700 mt-2 flex justify-between">
        <span>Total Expense:</span>
        <span className="text-red-500 text-right">Rs.900</span>
      </p>
    </div>
  )
}

export default MonthCard
