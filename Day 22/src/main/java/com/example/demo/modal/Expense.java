package com.example.demo.modal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal; // Import BigDecimal

@Data
@Builder
@Entity
@Table(name = "expenses") // Changed the table name to "expenses"

public class Expense { // Changed class name from ServiceProvider to Expense

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int expense_id; // Changed field name from serviceprovider_id to id

    @Column(length = 50)
    private String expenseDescription; // Changed field name from serviceprovider_name to description

    @Column(nullable = false) // Removed length for BigDecimal
    private BigDecimal expenseAmount; // Changed field type to BigDecimal

    
    Expense() {

    }
public Expense(int id, String expenseDescription, BigDecimal expenseAmount) {
    this.expense_id = id;
    this.expenseDescription = expenseDescription;
    this.expenseAmount = expenseAmount;
}

public int getExpense_id() {
	return expense_id;
}

public void setExpense_id(int expense_id) {
	this.expense_id = expense_id;
}

public String getExpenseDescription() {
	return expenseDescription;
}

public void setExpenseDescription(String expenseDescription) {
	this.expenseDescription = expenseDescription;
}

public BigDecimal getExpenseAmount() {
	return expenseAmount;
}

public void setExpenseAmount(BigDecimal expenseAmount) {
	this.expenseAmount = expenseAmount;
}



}

