Month Countdown ⏳

A simple JavaScript project that displays a live countdown showing the remaining time until the beginning of the next month.

🚀 Demo

The countdown displays:

- Days
- Hours
- Minutes
- Seconds

The timer updates automatically every second.

🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript

🧠 What I Practiced

This project was built to practice working with:

- "Date()" in JavaScript
- "getDate()"
- "getMonth()"
- "getFullYear()"
- Calculating the difference between dates
- Converting milliseconds into days, hours, minutes, and seconds
- Functions and parameters
- DOM manipulation
- "document.createElement()"
- "textContent"
- "setInterval()"
- CSS animations

⚙️ How It Works

The project gets the current date and calculates the date of the first day of the next month.

const now = new Date();

const year = now.getFullYear();
const month = now.getMonth();

const nextMonth = new Date(year, month + 1, 1);

const difference = nextMonth - now;

The difference is returned in milliseconds and then converted into days, hours, minutes, and seconds.

The countdown is updated every second using:

setInterval(updatetimer, 1000);

📁 Project Structure

month-countdown/
│
├── index.html
└── README.md

🎯 Purpose

This is a small learning project created to strengthen my JavaScript fundamentals and practice working with dates, timers, functions, and DOM manipulation.

📌 Future Improvements

Possible improvements for this project:

- Add a progress bar for the current month
- Improve the responsive design
- Add a dark/light mode
- Add better animations
- Display the current month name
- Add a visual indication when a new month begins

👨‍💻 Author

Mahmoud Hamdy

---

Made with HTML, CSS, and JavaScript.
