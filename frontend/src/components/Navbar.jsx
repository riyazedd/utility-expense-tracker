import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 shadow-md flex items-center justify-between px-8 py-4 text-lg text-white">
      <h1 className="font-extrabold text-2xl tracking-wide drop-shadow-sm text-gray-100">Expense Tracker</h1>
      <ul className="flex gap-8">
        <li>
          <Link to="/" className="hover:text-gray-400 transition-colors cursor-pointer">Dashboard</Link>
        </li>
        <li>
          <Link to="/add_expense" className="hover:text-gray-400 transition-colors cursor-pointer">Add Expense</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-gray-400 transition-colors cursor-pointer">Login</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
