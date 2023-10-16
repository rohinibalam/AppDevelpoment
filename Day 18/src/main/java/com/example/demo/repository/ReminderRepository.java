package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modal.Reminder; // Assuming you have a Reminder class

@Repository
public interface ReminderRepository extends JpaRepository<Reminder, Long> {
	
}
