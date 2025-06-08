const express  = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');

// initialse express app
const app = express();
const server = createServer(app);

// first endpoint which is route / serving some html
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
})

// listening to port 3000
server.listen(3000, () => {
    console.log('Server running at https://localhost:3000')
})