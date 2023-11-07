import { useState } from 'react'
import './App.css'
import AddExpense from './component/AddExpense'
import ExpenseList from './component/ExpenseList'

function App() {
  

  return (
    <>
    <h1>Expense App</h1>
    <AddExpense />
    <ExpenseList />
      
    </>
  )
}

export default App
