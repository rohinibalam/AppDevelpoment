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

    @Column(length = 50, nullable = false)
    private String expense_description; // Changed field name from serviceprovider_name to description

    @Column(nullable = false) // Removed length for BigDecimal
    private BigDecimal expense_amount; // Changed field type to BigDecimal

    @Column(length = 30, nullable = false)
    private String expense_setexpenses; // Changed field name from serviceprovider_company to setexpenses

    Expense() {

    }
public Expense(int id, String description, BigDecimal amount, String setexpenses) {
    this.expense_id = id;
    this.expense_description = description;
    this.expense_amount = amount;
    this.expense_setexpenses = setexpenses;
}

public int getExpense_id() {
	return expense_id;
}

public void setExpense_id(int expense_id) {
	this.expense_id = expense_id;
}

public String getExpense_description() {
	return expense_description;
}

public void setExpense_description(String expense_description) {
	this.expense_description = expense_description;
}

public BigDecimal getExpense_amount() {
	return expense_amount;
}

public void setExpense_amount(BigDecimal expense_amount) {
	this.expense_amount = expense_amount;
}

public String getExpense_setexpenses() {
	return expense_setexpenses;
}

public void setExpense_setexpenses(String expense_setexpenses) {
	this.expense_setexpenses = expense_setexpenses;
}


}

