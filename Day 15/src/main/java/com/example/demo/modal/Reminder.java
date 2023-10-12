package com.example.demo.modal;

import jakarta.persistence.Column;
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
    private String reminder_date; // Changed field name from serviceprovider_name to date

    @Column(length = 30, nullable = false)
    private String reminder_month; // Changed field name from serviceprovider_email to month

    @Column(length = 15, nullable = false)
    private String reminder_year; // Changed field name from serviceprovider_phonenumber to year

    @Column(length = 30, nullable = false)
    private String reminder_text; // Changed field name from serviceprovider_profession to remindertext

    @Column(length = 100, nullable = false)
    private String reminder_setreminder; // Changed field name from serviceprovider_company to setreminder

    Reminder() {

    }
public Reminder(int id, String date, String month, String year, String remindertext , String setreminder) {
    this.reminder_id = id;
    this.reminder_date = date;
    this.reminder_month = month;
    this.reminder_year = year;
    this.reminder_text = remindertext;
    this.reminder_setreminder = setreminder;
}

public int getReminder_id() {
	return reminder_id;
}

public void setReminder_id(int reminder_id) {
	this.reminder_id = reminder_id;
}

public String getReminder_date() {
	return reminder_date;
}

public void setReminder_name(String reminder_date) {
	this.reminder_date = reminder_date;
}

public String getReminder_month() {
	return reminder_month;
}

public void setReminder_month(String reminder_month) {
	this.reminder_month = reminder_month;
}

public String getReminder_year() {
	return reminder_year;
}

public void setReminder_year(String reminder_year) {
	this.reminder_year = reminder_year;
}

public String getReminder_text() {
	return reminder_text;
}

public void setReminder_text(String reminder_text) {
	this.reminder_text = reminder_text;
}

public String getReminder_setreminder() {
	return reminder_setreminder;
}

public void setReminder_setreminder(String reminder_setreminder) {
	this.reminder_setreminder = reminder_setreminder;
}

}