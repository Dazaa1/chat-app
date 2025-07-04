import express from 'express';
import { createServer } from 'node:http';
import { join } from 'node:path';
import { Server } from 'socket.io';

// initialse express app
const app = express();
const server = createServer(app);
// new instance of socket.io
const io = new Server(server);

// first endpoint which is route / serving some html
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
})

// listening on the connection event for upcoming connections.
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

const PORT = process.env.PORT || 3000;
// listening to port 3000
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})