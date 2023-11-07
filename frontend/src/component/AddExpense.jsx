
import { useState } from "react";
import axios from 'axios';
import './AddExpense.css';

function AddExpense() {

    const [expense, setExpense] = useState({ description: '', amount: 0, category: '' });

    const addExpense = async () => {
        await axios.post('http://localhost:3001/expenses', expense);
        setExpense({ description: '', amount: 0, category: '' });
    }    
        return (
            <>
               <div className="expense-form">
      <h2>Add Expense</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Description"
          value={expense.description}
          onChange={(e) => setExpense({ ...expense, description: e.target.value })}
        />
      </div>
      <div className="input-group">
        <input
          type="number"
          placeholder="Amount"
          value={expense.amount}
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          placeholder="Category"
          value={expense.category}
          onChange={(e) => setExpense({ ...expense, category: e.target.value })}
        />
      </div>
      <button onClick={addExpense}>Add Expense</button>
    </div>
            </>

        )
    }
    export default AddExpense