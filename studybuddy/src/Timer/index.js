import React, { useState, useEffect } from 'react';

const SunscreenReminders = () => {
  const [reminderOn, setReminderOn] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setReminderOn(true);
    
      // Set timeout for 1.5 hours (in milliseconds: 1.5 hours * 60 minutes * 60 seconds * 1000 milliseconds)
      setTimeout(() => {
        alert('Time to reapply sunscreen!');
      }, 5400); // 5400000 milliseconds = 1.5 hours
    } else {
      setReminderOn(false);
      alert('Reminder OFF');
    }
  };

  return (
    <div className='reminder'>
      <h2>Sunscreen Reminders</h2>
      <div className='reminder1'>
        <input type='checkbox' id='On' onChange={handleCheckboxChange} checked={reminderOn} />
        <label htmlFor='On'>On</label>
      </div>
      <div className='reminder2'>
        <input type='checkbox' id='Off' onChange={handleCheckboxChange} checked={!reminderOn} />
        <label htmlFor='Off'>Off</label>
      </div>
    </div>
  );
};

export default SunscreenReminders;


   

