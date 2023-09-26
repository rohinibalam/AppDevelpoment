// Reminder.jsx

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Sidebar from './Sidebar';
import Navbar1 from './Navbar1';
import 'react-calendar/dist/Calendar.css';
import '../assets/css/Reminder.css';
import '../assets/images/Reminder.jpg';

const Reminder = () => {
  const [date, setDate] = useState(new Date());
  const [reminderText, setReminderText] = useState('');
  const [reminders, setReminders] = useState([]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleReminderTextChange = (e) => {
    setReminderText(e.target.value);
  };

  const handleSetReminder = () => {
    const currentDate = new Date();

    if (date < currentDate) {
      alert('You cannot set a reminder for a past date.');
      return;
    }

    if (reminderText.trim() !== '') {
      const newReminder = {
        date,
        text: reminderText,
      };
      setReminders([...reminders, newReminder]);
      setReminderText('');
    }
  };

  const handleRemoveReminder = (index) => {
    const updatedReminders = [...reminders];
    updatedReminders.splice(index, 1);
    setReminders(updatedReminders);
  };

  return (
    <>
    <div className='reminder'>
    <div className="bar">
        <Sidebar />
      </div>
      {/* <div className="bar2">
        <Navbar1 />
      </div> */}
    <div className="reminder-container">
      <div className="calendar-container">
        <h1>Set Reminders</h1>
        <Calendar
          onChange={handleDateChange}
          value={date}
          className="calendar"
        />
      </div>
      <div className="container-below-reminder">
      <div className="reminder-input-container">
        <h2>Selected Date: {date.toDateString()}</h2>
        <input
         type="text"
         placeholder="Enter a reminder"
         value={reminderText}
         onChange={handleReminderTextChange}
        required // Make the input field required
/>

        <button className="set-reminder-button" onClick={handleSetReminder}>
          Set Reminder
        </button>
      </div> 
      <div className="reminder-list">
        <h2>Reminders:</h2>
        <ul>
          {reminders.map((reminder, index) => (
            <li key={index}>
              {reminder.date.toDateString()}: {reminder.text}
              <button
                className="remove-reminder-button"
                onClick={() => handleRemoveReminder(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Reminder;
