# Sunscreen Reminder App

This is a simple React application that reminds you to reapply sunscreen every 1.5 hours. It allows you to turn the reminders on or off and provides a customized alert with options to remind later or acknowledge the reminder. Additionally, the app fetches the UV index and updates the sun image according to the UV index level.

## Features

- **Sunscreen Reminders**: Receive alerts every 1.5 hours to reapply sunscreen.
- **Custom Alerts**: Alerts include options to "Remind Me Later" or "Okay", with custom styling using SweetAlert2.
- **UV Index Display**: Fetches and displays the current UV index, updating the sun image based on the UV index level.
- **State Management**: Easily turn reminders on or off, and manage alert intervals.
- **Responsive Design**: The UI is responsive and adapts to different screen sizes.

## Technologies Used

- **React**: For building the user interface.
- **SweetAlert2**: For customized alert dialogs.
- **CSS**: For styling the components.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/sunscreen-reminder-app.git
    cd sunscreen-reminder-app
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm start
    ```

## Usage

1. **Turning On Reminders**:
    - Check the "On" checkbox to start receiving reminders.
    - An alert will pop up every 1.5 hours reminding you to reapply sunscreen.

2. **Handling Alerts**:
    - When the alert appears, click "Okay" or "Remind Me Later".
    - Clicking "Okay" will restart the 1.5-hour timer.
    - Clicking "Remind Me Later" will set a reminder for 5 minutes later.

3. **Turning Off Reminders**:
    - Check the "Off" checkbox to stop receiving reminders.
    - This will clear the current timer and no more alerts will be shown.

4. **UV Index Display**:
    - The application fetches the current UV index using an external API.
    - Based on the UV index, the sun image's color changes to reflect the UV level:
        - 0-2: Green (Low)
        - 3-5: Yellow (Moderate)
        - 6-7: Orange (High)
        - 8+: Violet (Very High)
## License

This project is licensed under the MIT License.

---

Feel free to contribute, report issues, or request new features! Enjoy staying protected from the sun with this handy reminder app.


