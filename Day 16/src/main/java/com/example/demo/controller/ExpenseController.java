package com.example.demo.controller;

import com.example.demo.request.ExpenseRequest; // Updated import statement
import com.example.demo.modal.Expense; // Updated import statement
import com.example.demo.service.ExpenseService; // Updated import statement
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/expense") // Updated the request mapping

public class ExpenseController {

    private final ExpenseService expenseService; // Updated the service interface

    @Autowired
    public ExpenseController(ExpenseService expenseService) { // Updated constructor parameter and assignment
        this.expenseService = expenseService;
    }

    @GetMapping("/get")
    public ResponseEntity<List<Expense>> getAllExpenses() { // Updated method name and return type
        List<Expense> expenses = expenseService.getAllExpenses(); // Updated service method
        return ResponseEntity.ok(expenses);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Expense> getExpenseById(@PathVariable long id) { // Updated method name and parameter
        Expense expense = expenseService.getExpenseById(id); // Updated service method
        if (expense != null) {
            return ResponseEntity.ok(expense);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/post")
    public ResponseEntity<String> createExpense(@RequestBody ExpenseRequest expenseRequest) { // Updated method name and parameter
        try {
            boolean isDataSaved = expenseService.createExpense(expenseRequest); // Updated service method
            if (isDataSaved) {
                return ResponseEntity.status(201).body("Added successfully");
            } else {
                return ResponseEntity.status(403).body("Failed to add Expense");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Internal server error: " + e.getMessage());
        }
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<String> updateExpense(@PathVariable long id, @RequestBody ExpenseRequest expenseRequest) { // Updated method name and parameter
        boolean isUpdated = expenseService.updateExpense(id, expenseRequest); // Updated service method
        return isUpdated ? ResponseEntity.ok("Updated successfully") : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteExpense(@PathVariable long id) { // Updated method name and parameter
        boolean isDeleted = expenseService.deleteExpense(id); // Updated service method
        return isDeleted ? ResponseEntity.ok("Deleted successfully") : ResponseEntity.notFound().build();
    }
}
