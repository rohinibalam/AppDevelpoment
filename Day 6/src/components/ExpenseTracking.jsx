// ExpenseTracking.jsx

import React, { useState } from 'react';
import '../assets/css/ExpenseTracking.css';

const ExpenseTracking = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseDescription, setExpenseDescription] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleDescriptionChange = (e) => {
    setExpenseDescription(e.target.value);
  };

  const handleAmountChange = (e) => {
    setExpenseAmount(e.target.value);
  };

  const handleAddExpense = () => {
    if (expenseDescription.trim() !== '' && expenseAmount.trim() !== '') {
      const newExpense = {
        description: expenseDescription,
        amount: parseFloat(expenseAmount),
      };
      setExpenses([...expenses, newExpense]);
      setExpenseDescription('');
      setExpenseAmount('');
    }
  };

  const handleRemoveExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="expense-tracking-container">
      <h1>Expense Tracking</h1>
      <div className="expense-form">
        <input
          type="text"
          placeholder="Description"
          value={expenseDescription}
          onChange={handleDescriptionChange}
        />
        <input
          type="number"
          placeholder="Amount"
          value={expenseAmount}
          onChange={handleAmountChange}
        />
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
      <div className="expense-list">
        <h2>Expenses:</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.description}: ${expense.amount.toFixed(2)}
              <button onClick={() => handleRemoveExpense(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseTracking;
