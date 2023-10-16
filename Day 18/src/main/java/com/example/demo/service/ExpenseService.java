package com.example.demo.service;

import com.example.demo.request.ExpenseRequest; // Updated import statement
import com.example.demo.modal.Expense; // Updated import statement

import java.util.List;

public interface ExpenseService { // Changed interface name from ServiceProviderService to ExpenseService
    List<Expense> getAllExpenses(); // Changed return type and method name
    Expense getExpenseById(long id); // Changed return type and method name
    boolean createExpense(ExpenseRequest expenseRequest); // Changed method name and parameter type
    boolean updateExpense(long id, ExpenseRequest expenseRequest); // Changed method name and parameter type
    boolean deleteExpense(long id); // Changed method name and parameter type
}
