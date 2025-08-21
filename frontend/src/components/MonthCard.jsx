import React from 'react'

const MonthCard = ({expenses}) => {
  // Nepali month names
  const nepaliMonths = [
    '', 'Baisakh', 'Jestha', 'Ashadh', 'Shrawan', 'Bhadra', 'Ashwin', 'Kartik', 'Mangsir', 'Poush', 'Magh', 'Falgun', 'Chaitra'
  ];
  let year = '', month = '';
  let monthName = '';
  if (expenses.date) {
    [year, month] = expenses.date.split('-');
    monthName = nepaliMonths[parseInt(month, 10)] || month;
  }
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs mx-auto flex flex-col gap-2 border border-gray-200">
      <h1 className="text-xl font-bold text-gray-800 mb-2">{monthName && year ? `${monthName}, ${year} B.S` : expenses.date}</h1>
      <p className="text-gray-600 flex justify-between">
        <span>Total Electricity Unit:</span>
        <span className="font-semibold text-right">{expenses.total_unit}</span>
      </p>
      <p className="text-blue-600 flex justify-between">
        <span>Electricity:</span>
        <span className="font-semibold text-right">Rs.{expenses.total_electricity_price}</span>
      </p>
      <p className="text-blue-400 flex justify-between">
        <span>Water:</span>
        <span className="font-semibold text-right">Rs.{expenses.water_price}</span>
      </p>
      <p className="text-green-500 flex justify-between">
        <span>Waste:</span>
        <span className="font-semibold text-right">Rs.{expenses.waste_price}</span>
      </p>
      <hr></hr>
      <p className="text-lg font-bold text-gray-700 mt-2 flex justify-between">
        <span>Total Expense:</span>
        <span className="text-red-500 text-right">Rs.{expenses.total_expense}</span>
      </p>
    </div>
  )
}

export default MonthCard
