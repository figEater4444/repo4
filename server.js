
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Allows students to connect to your IP
app.use(express.json());
app.use(express.static('.')); // Serves your index.html automatically

// Endpoint to receive student results
app.post('/submit-results', (req, res) => {
    const result = req.body;
    
    // Save to a local JSON file on your laptop
    const data = JSON.parse(fs.readFileSync('all_results.json', 'utf8') || '[]');
    data.push(result);
    fs.writeFileSync('all_results.json', JSON.stringify(data, null, 2));
    
    console.log(`✅ Result received from: ${result.name}`);
    res.status(200).send({ message: "Saved on Server!" });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Exam Server running at http://localhost:${PORT}`);
    console.log(`📡 Students should connect to: http://YOUR_IP_HERE:${PORT}`);
});
