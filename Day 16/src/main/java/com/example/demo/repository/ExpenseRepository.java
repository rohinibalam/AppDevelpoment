package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modal.Expense; // Assuming you have an Expense class

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
	
}
