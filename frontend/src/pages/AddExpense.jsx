
import React, { useState } from 'react';
import { ADToBS } from 'bikram-sambat-js';
import NepaliDatePickerComponent from '../components/NepaliDatePicker';

const getDefaultDate = () => {
  // Always set to 8th of current BS month
  const now = new Date();
  // Subtract one day for BS conversion accuracy
  const fixedDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
  let bsToday = ADToBS(fixedDate);
  // Replace day with 08
  const [y, m] = bsToday.split('-');
  return `${y}-${m}-08`;
};

const AddExpense = () => {
  const [date, setDate] = useState(getDefaultDate());
  const [elecCurrent, setElecCurrent] = useState('');
  const [elecPrev, setElecPrev] = useState('');
  const [elecTotal, setElecTotal] = useState('');
  const [elecPrice, setElecPrice] = useState('');
  const [waterPrice, setWaterPrice] = useState('');
  const [wastePrice, setWastePrice] = useState('100');

  // Calculate total unit used for electricity
  const handleElecChange = (current, prev) => {
    if (current !== '' && prev !== '') {
      const total = parseInt(current, 10) - parseInt(prev, 10);
      if(total>0){
        setElecPrice(total*12);
      }
      setElecTotal(total >= 0 ? total : '');
    } else {
      setElecTotal('');
    }
  };

  // Calculate total expense
  const totalExpense =
    (parseInt(elecPrice || 0, 10) || 0) +
    (parseInt(waterPrice || 0, 10) || 0) +
    (parseInt(wastePrice || 0, 10) || 0);

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 mt-10 mb-10">
      {/* Form Section */}
      <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800 tracking-tight flex items-center justify-center gap-2">
          <span role="img" aria-label="money">💸</span> Add Expense
        </h1>
        <form className="flex flex-col gap-8">
          {/* Date Field */}
          <div className="flex flex-col gap-1">
            <label className="block mb-2 text-lg font-semibold text-gray-700">Date (BS)</label>
            <NepaliDatePickerComponent value={date} onChange={setDate} />
          </div>
          {/* Electricity Fields */}
          <section className="rounded-xl bg-gray-50 p-4 border border-gray-200 shadow-sm">
            <h2 className="font-bold text-lg mb-3 flex items-center gap-2 text-blue-700">
              <span role="img" aria-label="electricity">⚡</span> Electricity
            </h2>
            <div className="flex gap-3 flex-col sm:flex-row">
              <div className="flex-1">
                <label className="block mb-2 text-lg font-medium">This Month Meter Unit</label>
                <input type="number" className="input input-bordered w-full focus:ring-2 focus:ring-blue-400 text-lg py-3 px-4 bg-gray-100" value={elecCurrent} onChange={e => { setElecCurrent(e.target.value); handleElecChange(e.target.value, elecPrev); }} placeholder="e.g. 1200" />
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-lg font-medium">Previous Month Meter Unit</label>
                <input type="number" className="input input-bordered w-full focus:ring-2 focus:ring-blue-400 text-lg py-3 px-4 bg-gray-100" value={elecPrev} onChange={e => { setElecPrev(e.target.value); handleElecChange(elecCurrent, e.target.value); }} placeholder="e.g. 1150" />
              </div>
            </div>
            <div className="flex gap-3 mt-3 flex-col sm:flex-row">
              <div className="flex-1">
                <label className="block mb-2 text-lg font-medium">Total Unit Used</label>
                <input type="number" className="input input-bordered w-full bg-gray-100 text-right font-bold text-lg py-3 px-4" value={elecTotal === '' ? 0 : elecTotal} readOnly />
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-lg font-medium">Total Price</label>
                <input type="number" className="input input-bordered w-full focus:ring-2 focus:ring-blue-400 text-lg py-3 px-4 bg-gray-100" value={elecPrice} onChange={e => setElecPrice(e.target.value)} placeholder="e.g. 600" />
              </div>
            </div>
          </section>
          {/* Water Field */}
          <section className="rounded-xl bg-gray-50 p-4 border border-gray-200 shadow-sm">
            <h2 className="font-bold text-lg mb-3 flex items-center gap-2 text-blue-500">
              <span role="img" aria-label="water">💧</span> Water
            </h2>
            <label className="block mb-2 text-lg font-medium">Price</label>
            <input type="number" className="input input-bordered w-full focus:ring-2 focus:ring-blue-300 text-lg py-3 px-4 bg-gray-100" value={waterPrice} onChange={e => setWaterPrice(e.target.value)} placeholder="e.g. 200" />
          </section>
          {/* Waste Field */}
          <section className="rounded-xl bg-gray-50 p-4 border border-gray-200 shadow-sm">
            <h2 className="font-bold text-lg mb-3 flex items-center gap-2 text-green-600">
              <span role="img" aria-label="waste">🗑️</span> Waste
            </h2>
            <label className="block mb-2 text-lg font-medium">Price</label>
            <input type="number" className="input input-bordered w-full focus:ring-2 focus:ring-green-300 text-lg py-3 px-4 bg-gray-100" value={wastePrice} onChange={e => setWastePrice(e.target.value)} placeholder="e.g. 100" />
          </section>
          <button type="submit" className="mt-4 bg-gray-800 text-white py-4 rounded-xl font-bold text-xl hover:bg-gray-700 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex items-center justify-center gap-2">
            <span role="img" aria-label="add">➕</span> Add Expense
          </button>
        </form>
      </div>
      {/* Summary Section */}
      <div className="w-full md:w-80 flex-shrink-0">
        <div className="sticky top-10 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-gray-700 mb-2 flex items-center gap-2"><span role="img" aria-label="summary">📊</span> Summary</h2>
          <div className="flex justify-between text-lg">
            <span>Total Unit Used:</span>
            <span className="font-bold text-blue-700">{elecTotal || 0}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Electricity Price:</span>
            <span className="font-bold text-blue-500">Rs.{elecPrice || 0}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Water Price:</span>
            <span className="font-bold text-blue-500">Rs.{waterPrice || 0}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Waste Price:</span>
            <span className="font-bold text-green-600">Rs.{wastePrice || 0}</span>
          </div>
          <div className="border-t pt-3 flex justify-between text-xl font-extrabold">
            <span>Total Expense:</span>
            <span className="text-red-600">Rs.{totalExpense}</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AddExpense;
