package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modal.Expense; // Updated import statement
import com.example.demo.repository.ExpenseRepository; // Updated import statement
import com.example.demo.request.ExpenseRequest; // Updated import statement

@Service

public class ExpenseServiceImplementation implements ExpenseService { // Changed class name from ServiceProviderServiceImplementation to ExpenseServiceImplementation

    private final ExpenseRepository expenseRepository; // Updated repository interface

    @Autowired
    public ExpenseServiceImplementation(ExpenseRepository expenseRepository) { // Updated constructor parameter
        this.expenseRepository = expenseRepository;
    }

    @Override
    public List<Expense> getAllExpenses() { // Changed return type and method name
        return expenseRepository.findAll(); // Updated repository method
    }

    @Override
    public Expense getExpenseById(long id) { // Changed return type and method name
        Optional<Expense> expenseOptional = expenseRepository.findById(id); // Updated repository method
        return expenseOptional.orElse(null);
    }

    @Override
    public boolean createExpense(ExpenseRequest expenseRequest) { // Changed method name and parameter type
        Expense expense = Expense.builder()
                .expense_description(expenseRequest.getExpense_description()) // Updated field name
                .expense_amount(expenseRequest.getExpense_amount()) // Updated field name
                .expense_setexpenses(expenseRequest.getExpense_setexpenses()) // Updated field name
                .build();

        expenseRepository.save(expense); // Updated repository method
        return true;
    }

    @Override
    public boolean updateExpense(long id, ExpenseRequest expenseRequest) { // Changed method name and parameter type
        Optional<Expense> expenseOptional = expenseRepository.findById(id); // Updated repository method
        if (expenseOptional.isPresent()) {
            Expense expense = expenseOptional.get();
            expense.setExpense_description(expenseRequest.getExpense_description()); // Updated field name
            expense.setExpense_amount(expenseRequest.getExpense_amount()); // Updated field name
            expense.setExpense_setexpenses(expenseRequest.getExpense_setexpenses()); // Updated field name

            expenseRepository.save(expense); // Updated repository method
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteExpense(long id) { // Changed method name and parameter type
        Optional<Expense> expenseOptional = expenseRepository.findById(id); // Updated repository method
        if (expenseOptional.isPresent()) {
            expenseRepository.deleteById(id); // Updated repository method
            return true;
        }
        return false;
    }
}
