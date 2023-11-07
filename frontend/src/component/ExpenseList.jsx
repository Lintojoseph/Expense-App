import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ExpenseList(){
    const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const result = await axios.get('http://localhost:3001/expenses');
      setExpenses(result.data);
    };

    fetchExpenses();
  }, []);
    return(
        <>
        <div className="expense-list">
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id} className="expense-item">
            <div className="expense-details">
              <h3>{expense.description}</h3>
              <p>
                <span>Amount: ${expense.amount}</span><br></br>
                <span>Category: {expense.category}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
        </>
    )
}

export default ExpenseList