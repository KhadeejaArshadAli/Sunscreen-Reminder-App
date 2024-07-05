import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SunscreenReminders = () => {
  const [reminderOn, setReminderOn] = useState(false);
 
  const [timeoutId, setTimeoutId] = useState(null);

  const showNotification = () => {
    toast('Time to reapply sunscreen!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setReminderOn(true);
    
      // Set timeout for 1.5 hours (in milliseconds: 1.5 hours * 60 minutes * 60 seconds * 1000 milliseconds)
      const id = setTimeout(showNotification, 5400); // 1.5 hours
      setTimeoutId(id);
    } else {
      setReminderOn(false);
      clearTimeout(timeoutId);
      toast.info('Reminder OFF', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      <ToastContainer />
    </div>
  );
};

export default SunscreenReminders;


   

