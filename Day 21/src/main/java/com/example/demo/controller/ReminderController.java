package com.example.demo.controller;

import com.example.demo.request.ReminderRequest;
import com.example.demo.modal.Reminder;
import com.example.demo.service.ReminderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/reminder")
public class ReminderController {

    private final ReminderService reminderService;

    @Autowired
    public ReminderController(ReminderService reminderService) {
        this.reminderService = reminderService;
    }

    @GetMapping("/get")
    public ResponseEntity<List<Reminder>> getAllServiceProviders() {
        List<Reminder> reminder = reminderService.getAllReminder();
        return ResponseEntity.ok(reminder);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Reminder> getServiceProviderById(@PathVariable long id) {
        Reminder reminder = reminderService.getReminderById(id);
        if (reminder != null) {
            return ResponseEntity.ok(reminder);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/post")
    public ResponseEntity<String> createReminder(@RequestBody ReminderRequest reminderRequest) {
        try {
            boolean isDataSaved = reminderService.createReminder(reminderRequest);
            if (isDataSaved) {
                return ResponseEntity.status(201).body("Added successfully");
            } else {
                return ResponseEntity.status(403).body("Failed to add Reminder");
            }
        } catch (Exception e) {
            e.printStackTrace(); 
            return ResponseEntity.status(500).body("Internal server error: " + e.getMessage());
        }
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<String> updateReminder(@PathVariable long id, @RequestBody ReminderRequest reminderRequest) {
        boolean isUpdated = reminderService.updateReminder(id, reminderRequest);
        return isUpdated ? ResponseEntity.ok("Updated successfully") : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteReminder(@PathVariable long id) {
        boolean isDeleted = reminderService.deleteReminder(id);
        return isDeleted ? ResponseEntity.ok("Deleted successfully") : ResponseEntity.notFound().build();
    }
}
