import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [candidates, setCandidates] = useState([]);
    const [search, setSearch] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    // Fetch candidates
    useEffect(() => {
        axios.get('http://localhost:5000/api/candidates')
            .then(response => setCandidates(response.data))
            .catch(error => console.error(error));
    }, []);

    // Handle Search
    const filteredCandidates = candidates.filter(candidate =>
        candidate.name.toLowerCase().includes(search.toLowerCase()) ||
        candidate.skills.toLowerCase().includes(search.toLowerCase())
    );

    // Handle Sorting
    const sortedCandidates = [...filteredCandidates].sort((a, b) => {
        if (sortOrder === 'asc') return a.experience - b.experience;
        return b.experience - a.experience;
    });

    return (
        <div style={{ padding: '20px' }}>
            <h1>Candidate List Viewer</h1>
            <input
                type="text"
                placeholder="Search by Name or Skills"
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
            />
            <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                Sort by Experience ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
            </button>
            <table border="1" style={{ width: '100%', marginTop: '20px', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Skills</th>
                        <th>Years of Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCandidates.map(candidate => (
                        <tr key={candidate.id}>
                            <td>{candidate.name}</td>
                            <td>{candidate.skills}</td>
                            <td>{candidate.experience}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
