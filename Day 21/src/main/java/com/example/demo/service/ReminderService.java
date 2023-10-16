package com.example.demo.service;

import com.example.demo.request.ReminderRequest; // Update the import statement
import com.example.demo.modal.Reminder;

import java.util.List;

public interface ReminderService {
    List<Reminder> getAllReminder();
    Reminder getReminderById(long id);
    boolean createReminder(ReminderRequest reminderRequest); // Update the parameter type
    boolean updateReminder(long id, ReminderRequest reminderRequest); // Update the parameter type
    boolean deleteReminder(long id);
}
