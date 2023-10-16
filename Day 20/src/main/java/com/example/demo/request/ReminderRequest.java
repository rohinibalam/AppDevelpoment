package com.example.demo.request;

import lombok.AllArgsConstructor;
import java.util.Date;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class ReminderRequest { // Changed class name from ServiceProviderRequest to ReminderRequest

    public Date getReminderdate() { // Changed method name from getServiceprovider_name to getReminder_name
        return reminderdate; // Changed field name from serviceprovider_name to reminder_name
    }

    public void setReminderdate(Date reminderdate) { // Changed method name from setServiceprovider_name to setReminder_name
        this.reminderdate = reminderdate; // Changed field name from serviceprovider_name to reminder_name
    }

    public String getReminderText() { // Changed method name from getServiceprovider_email to getReminder_email
        return reminderText; // Changed field name from serviceprovider_email to reminder_email
    }

    public void setReminderText(String reminderText) { // Changed method name from setServiceprovider_email to setReminder_email
        this.reminderText = reminderText; // Changed field name from serviceprovider_email to reminder_email
    }

    public String getReminders() { // Changed method name from getServiceprovider_phonenumber to getReminder_phonenumber
        return reminders; // Changed field name from serviceprovider_phonenumber to reminder_phonenumber
    }

    public void setReminders(String reminders) { // Changed method name from setServiceprovider_phonenumber to setReminder_phonenumber
        this.reminders = reminders; // Changed field name from serviceprovider_phonenumber to reminder_phonenumber
    }

    

    private Date reminderdate; // Changed field name from serviceprovider_name to reminder_name
    private String reminderText; // Changed field name from serviceprovider_email to reminder_email
    private String reminders; // Changed field name from serviceprovider_phonenumber to reminder_phonenumber
    
}
