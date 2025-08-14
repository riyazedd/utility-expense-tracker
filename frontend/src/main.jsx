import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AddExpense from './pages/AddExpense.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index="true" path="/" element={<Dashboard />} />
        <Route path="/add_expense" element={<AddExpense />} />
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
