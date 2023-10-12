package com.example.demo.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class ReminderRequest { // Changed class name from ServiceProviderRequest to ReminderRequest

    public String getReminder_date() { // Changed method name from getServiceprovider_name to getReminder_name
        return reminder_date; // Changed field name from serviceprovider_name to reminder_name
    }

    public void setReminder_date(String reminder_date) { // Changed method name from setServiceprovider_name to setReminder_name
        this.reminder_date = reminder_date; // Changed field name from serviceprovider_name to reminder_name
    }

    public String getReminder_month() { // Changed method name from getServiceprovider_email to getReminder_email
        return reminder_month; // Changed field name from serviceprovider_email to reminder_email
    }

    public void setReminder_month(String reminder_month) { // Changed method name from setServiceprovider_email to setReminder_email
        this.reminder_month = reminder_month; // Changed field name from serviceprovider_email to reminder_email
    }

    public String getReminder_year() { // Changed method name from getServiceprovider_phonenumber to getReminder_phonenumber
        return reminder_year; // Changed field name from serviceprovider_phonenumber to reminder_phonenumber
    }

    public void setReminder_year(String reminder_year) { // Changed method name from setServiceprovider_phonenumber to setReminder_phonenumber
        this.reminder_year = reminder_year; // Changed field name from serviceprovider_phonenumber to reminder_phonenumber
    }

    public String getReminder_text() { // Changed method name from getServiceprovider_profession to getReminder_profession
        return reminder_text; // Changed field name from serviceprovider_profession to reminder_profession
    }

    public void setReminder_text(String reminder_text) { // Changed method name from setServiceprovider_profession to setReminder_profession
        this.reminder_text = reminder_text; // Changed field name from serviceprovider_profession to reminder_profession
    }

    public String getReminder_setreminder() { // Changed method name from getServiceprovider_company to getReminder_company
        return reminder_setreminder; // Changed field name from serviceprovider_company to reminder_company
    }

    public void setReminder_setreminder(String reminder_setreminder) { // Changed method name from setServiceprovider_company to setReminder_company
        this.reminder_setreminder = reminder_setreminder; // Changed field name from serviceprovider_company to reminder_company
    }

    private String reminder_date; // Changed field name from serviceprovider_name to reminder_name
    private String reminder_month; // Changed field name from serviceprovider_email to reminder_email
    private String reminder_year; // Changed field name from serviceprovider_phonenumber to reminder_phonenumber
    private String reminder_text; // Changed field name from serviceprovider_profession to reminder_profession
    private String reminder_setreminder; // Changed field name from serviceprovider_company to reminder_company
}
