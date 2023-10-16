package com.example.demo.modal;

import jakarta.persistence.Column;
import java.util.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Entity
@Table(name = "reminders") // Changed the table name

public class Reminder { // Changed class name from ServiceProvider to Reminder

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reminder_id; // Changed field name from serviceprovider_id to id

    @Column(length = 50, nullable = false)
    private Date reminderdate; // Changed field name from serviceprovider_name to date

    @Column(length = 30)
    private String reminderText; // Changed field name from serviceprovider_email to month

    @Column(length = 15, nullable = false)
    private String reminders; // Changed field name from serviceprovider_phonenumber to year

    

    Reminder() {

    }
public Reminder(int id, Date reminderdate, String reminderText , String reminders) {
    this.reminder_id = id;
    this.reminderdate = reminderdate;
    this.reminderText = reminderText;
    this.reminders = reminders;
    
}

public int getReminder_id() {
	return reminder_id;
}

public void setReminder_id(int reminder_id) {
	this.reminder_id = reminder_id;
}

public Date getReminderdate() {
	return reminderdate;
}

public void setReminderdate(Date reminderdate) {
	this.reminderdate = reminderdate;
}

public String getReminderText() {
	return reminderText;
}

public void setReminderText(String reminderText) {
	this.reminderText = reminderText;
}

public String getReminders() {
	return reminders;
}

public void setReminders(String reminders) {
	this.reminders = reminders;
}



}