import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../style.css';

const MySwal = withReactContent(Swal);

const SunscreenReminders = () => {
  const [reminderOn, setReminderOn] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const remindMeLater = () => {
    setTimeout(() => {
      showNotification();
    }, 300000); // 300000 milliseconds = 5 minutes
  };

  const showNotification = () => {
    MySwal.fire({
      title: 'IT\'S TIME',
      text: 'Reapply your sunscreen!!!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Okay',
      cancelButtonText: 'Remind Me Later',
      customClass: {
        popup: 'my-popup',
        title: 'my-title',
        content: 'my-content',
        confirmButton: 'my-confirm-button',
        cancelButton: 'my-cancel-button',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        startTimer(); // Restart the timer when "Okay" is clicked
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        remindMeLater(); // Remind after 5 minutes when "Remind Me Later" is clicked
      }
    });
  };

  const startTimer = () => {
    // Clear any existing timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // Set new timer for 1.5 hours (5400000 milliseconds)
    const id = setTimeout(showNotification, 540);
    setTimeoutId(id);
  };

  const handleCheckboxChange = (event) => {
    if (event.target.id === 'On') {
      setReminderOn(event.target.checked);
      if (event.target.checked) {
        startTimer(); // Start the timer when the reminder is turned on
      } else {
        clearTimeout(timeoutId); // Clear the timer when the reminder is turned off
        setTimeoutId(null); // Reset the timeoutId state
      }
    } else if (event.target.id === 'Off') {
      setReminderOn(!event.target.checked);
      clearTimeout(timeoutId); // Clear the timer when the reminder is turned off
      setTimeoutId(null); // Reset the timeoutId state
    }
  };

  // Clear the timer on component unmount to avoid memory leaks
  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

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
