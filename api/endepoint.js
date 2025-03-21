const express = require('express');
const app = express();

// Defina o endpoint /api/endpoint
app.get('/api/endpoint', (req, res) => {
    res.send('Dados recebidos!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
