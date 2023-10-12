package com.example.demo.request;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class ExpenseRequest {

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
		private String expense_description;
    private BigDecimal expense_amount;
    private String expense_setexpenses;
    
      
}
