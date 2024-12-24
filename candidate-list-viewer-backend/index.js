const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Mock data
const candidates = [
    { id: 1, name: "John Doe", skills: "React, Node.js", experience: 5 },
    { id: 2, name: "Jane Smith", skills: "JavaScript, Python", experience: 3 },
    { id: 3, name: "Mark Taylor", skills: "Java, Spring Boot", experience: 7 },
    { id: 4, name: "Emily Clark", skills: "Angular, TypeScript", experience: 4 },
    { id: 5, name: "Chris Johnson", skills: "React, Redux", experience: 6 },
    { id: 6, name: "Sarah Wilson", skills: "Node.js, Express", experience: 2 },
    { id: 7, name: "Michael Brown", skills: "Vue.js, Tailwind CSS", experience: 3 },
    { id: 8, name: "Laura Davis", skills: "PHP, Laravel", experience: 8 },
    { id: 9, name: "Kevin Lee", skills: "C++, Python", experience: 4 },
    { id: 10, name: "Sophia Martinez", skills: "Go, Kubernetes", experience: 5 }
];

// API endpoint
app.get('/api/candidates', (req, res) => {
    res.json(candidates);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
