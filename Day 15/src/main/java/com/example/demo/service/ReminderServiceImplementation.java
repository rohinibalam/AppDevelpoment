package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modal.Reminder; // Replaced ServiceProvider with Reminder
import com.example.demo.repository.ReminderRepository; // Replaced ServiceProviderRepository with ReminderRepository
import com.example.demo.request.ReminderRequest; // Replaced ServiceProviderRequest with ReminderRequest

@Service
public class ReminderServiceImplementation implements ReminderService { // Replaced ServiceProviderService with ReminderService

    private final ReminderRepository reminderRepository; // Replaced serviceProviderRepository with reminderRepository

    @Autowired
    public ReminderServiceImplementation(ReminderRepository reminderRepository) { // Replaced ServiceProviderRepository with ReminderRepository
        this.reminderRepository = reminderRepository; // Replaced serviceProviderRepository with reminderRepository
    }

    @Override
    public List<Reminder> getAllReminder() { // Replaced ServiceProvider with Reminder
        return reminderRepository.findAll(); // Replaced serviceProviderRepository with reminderRepository
    }

    @Override
    public Reminder getReminderById(long id) { // Replaced ServiceProvider with Reminder
        Optional<Reminder> reminderOptional = reminderRepository.findById(id); // Replaced serviceProviderRepository with reminderRepository
        return reminderOptional.orElse(null);
    }

    @Override
    public boolean createReminder(ReminderRequest reminderRequest) { // Replaced ServiceProviderRequest with ReminderRequest
        Reminder reminder = Reminder.builder()
                .reminder_date(reminderRequest.getReminder_date()) // Replaced serviceProviderRequest with reminderRequest
                .reminder_month(reminderRequest.getReminder_month()) // Replaced serviceProviderRequest with reminderRequest
                .reminder_year(reminderRequest.getReminder_year()) // Replaced serviceProviderRequest with reminderRequest
                .reminder_text(reminderRequest.getReminder_text()) // Replaced serviceProviderRequest with reminderRequest
                .reminder_setreminder(reminderRequest.getReminder_setreminder()) // Replaced serviceProviderRequest with reminderRequest
                .build();

        reminderRepository.save(reminder); // Replaced serviceProviderRepository with reminderRepository
        return true;
    }

    @Override
    public boolean updateReminder(long id, ReminderRequest reminderRequest) { // Replaced ServiceProviderRequest with ReminderRequest
        Optional<Reminder> reminderOptional = reminderRepository.findById(id); // Replaced serviceProviderRepository with reminderRepository
        if (reminderOptional.isPresent()) {
            Reminder reminder = reminderOptional.get();
            reminder.setReminder_date(reminderRequest.getReminder_date()); // Replaced serviceProviderRequest with reminderRequest
            reminder.setReminder_month(reminderRequest.getReminder_month()); // Replaced serviceProviderRequest with reminderRequest
            reminder.setReminder_year(reminderRequest.getReminder_year()); // Replaced serviceProviderRequest with reminderRequest
            reminder.setReminder_text(reminderRequest.getReminder_text()); // Replaced serviceProviderRequest with reminderRequest
            reminder.setReminder_setreminder(reminderRequest.getReminder_setreminder()); // Replaced serviceProviderRequest with reminderRequest

            reminderRepository.save(reminder); // Replaced serviceProviderRepository with reminderRepository
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteReminder(long id) { // Replaced ServiceProvider with Reminder
        Optional<Reminder> reminderOptional = reminderRepository.findById(id); // Replaced serviceProviderRepository with reminderRepository
        if (reminderOptional.isPresent()) {
            reminderRepository.deleteById(id); // Replaced serviceProviderRepository with reminderRepository
            return true;
        }
        return false;
    }
}
