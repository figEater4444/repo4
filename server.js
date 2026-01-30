// server.js - Viswam Edutech LAN Server
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);

const FILES = {
    BANK: path.join(DATA_DIR, 'question_bank.json'),
    PAPERS: path.join(DATA_DIR, 'exam_papers.json'),
    RESULTS: path.join(DATA_DIR, 'student_results.json'),
    USERS: path.join(DATA_DIR, 'users.json')
};

const readData = (file) => fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : [];
const writeData = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 2));

// --- API ROUTES ---
app.post('/api/users', (req, res) => {
    const users = readData(FILES.USERS);
    if (users.find(u => u.username === req.body.username)) return res.status(400).json({ success: false });
    users.push(req.body);
    writeData(FILES.USERS, users);
    res.json({ success: true });
});

app.get('/api/users', (req, res) => res.json(readData(FILES.USERS)));

app.delete('/api/users/:username', (req, res) => {
    let users = readData(FILES.USERS);
    users = users.filter(u => u.username !== req.params.username);
    writeData(FILES.USERS, users);
    res.json({ success: true });
});

app.get('/api/bank', (req, res) => res.json(readData(FILES.BANK)));
app.post('/api/bank', (req, res) => {
    const bank = readData(FILES.BANK);
    bank.push({ id: Date.now(), ...req.body });
    writeData(FILES.BANK, bank);
    res.json({ success: true });
});

app.get('/api/papers', (req, res) => res.json(readData(FILES.PAPERS)));
app.post('/api/papers', (req, res) => {
    const papers = readData(FILES.PAPERS);
    papers.push({ id: Date.now(), ...req.body });
    writeData(FILES.PAPERS, papers);
    res.json({ success: true });
});

app.post('/api/submit', (req, res) => {
    const results = readData(FILES.RESULTS);
    results.push({ id: Date.now(), timestamp: new Date().toLocaleString(), ...req.body });
    writeData(FILES.RESULTS, results);
    res.json({ success: true });
});

app.get('/api/results', (req, res) => res.json(readData(FILES.RESULTS)));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n=========================================`);
    console.log(`🚀 Viswam Edutech Exam Server is Online`);
    console.log(`📡 LAN URL: http://YOUR_IP_HERE:${PORT}`);
    console.log(`🔑 Admin Pass: Viswam@2026`);
    console.log(`=========================================\n`);
});
