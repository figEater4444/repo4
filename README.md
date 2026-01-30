1. Prerequisites
Node.js installed on the host laptop (Download here: https://nodejs.org/en).

Both the teacher's laptop and student devices must be on the same Wi-Fi network.

2. Installation
Clone/Download this repository to your laptop.

Ensure your logos (iitneet.png and viswam.png) are in the project folder.

Open your terminal/command prompt in the project folder and run:

Bash
npm install express cors
3. Execution
Start the server by running:

Bash
node server.js
Admin Access: Open your browser and go to http://localhost:3000.

Username: admin

Password: Viswam@2026

4. Connecting Students
Find your laptop's IPv4 Address (Type ipconfig in Windows CMD or ifconfig in Mac Terminal).

Tell students to open their mobile/tablet browser and type: http://[YOUR_IP_ADDRESS]:3000 (Example: http://192.168.1.15:3000)

✨ Key Features
Centralized Database: All student results are saved to data/student_results.json on the host laptop.

OCR Integration: Upload a screenshot of a question to auto-fill text using Tesseract.js.

Security: Only students with IDs/Passwords created by the admin can log in.

Anti-Cheat: Automatic question randomization (Fisher-Yates) and countdown timer.

📂 Project Structure
index.html: The main portal for both students and admins.

server.js: The Node.js backend to handle data and file storage.

data/: (Generated automatically) Stores question banks, papers, and results.

iitneet.png & viswam.png: Branding logos for the header.
