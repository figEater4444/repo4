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
how edutech company benefit with this project?
This project transforms a standard Edutech workflow into a high-efficiency, localized digital operation. By integrating administrative security, bulk data handling, and local network reliability, a company like **Viswam Edutech** stands to gain significant strategic advantages.

Here is how an Edutech company benefits from this project:

### 1. Drastic Reduction in Content Creation Time

Traditional data entry for 100-question mock tests is a bottleneck.

* **The Benefit:** By using **OCR (Screenshot-to-Text)** and **Bulk JSON Imports**, teachers can convert physical books or PDF banks into digital tests in minutes rather than days.
* **Operational Gain:** Faster product turnaround for new curriculum launches (e.g., IIT-NEET modules).

### 2. High Portability for Rural & Remote Areas

Many Edutech companies struggle with regions where internet connectivity is expensive or unstable.

* **The Benefit:** Since the project runs on a **Local Wi-Fi Network (LAN)**, the company can deploy exam centers in remote schools using just a single laptop and a basic router—no internet required.
* **Market Expansion:** Allows the company to reach "offline" markets that competitors cannot serve.

### 3. Enhanced Intellectual Property (IP) Protection

Hosting exams on public websites makes questions vulnerable to "scraping" or leaking.

* **The Benefit:** Since the Question Bank and Paper Designer live on a **private laptop server**, the proprietary IIT-NEET questions never leave the company's hardware.
* **Security:** Admin passwords and student-specific IDs prevent unauthorized access to premium content.

### 4. Robust Data Analytics & Performance Tracking

Edutech value is driven by the ability to show student improvement.

* **The Benefit:** The **Centralized Gradebook** and **CSV Export** features allow the company to analyze performance trends across classes instantly.
* **Scalability:** Teachers can identify common "weak topics" across 100 students at once and adjust the curriculum accordingly.

### 5. Professional Branding & Trust

Customization with the **Viswam Edutech Curriculum** and **IIT-NEET** logos builds a professional identity.

* **The Benefit:** When students see a branded, high-tech interface on their mobile devices, it increases the perceived value of the coaching service.
* **Student Experience:** Features like randomization and live countdown timers simulate real competitive exam environments (like the actual NEET/JEE computer-based tests).

### 6. Cost Efficiency

* **The Benefit:** No monthly subscriptions for "LMS" platforms or "Form Builders."
* **Maintenance:** The system uses standard web technologies (HTML/Node.js) that are free to use and easy for a local IT person to maintain.

---

**Would you like me to refine the "Bulk Import" feature to include "Difficulty Levels" so you can generate balanced papers (Easy/Medium/Hard) automatically?**
