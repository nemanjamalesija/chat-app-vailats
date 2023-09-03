const { app } = require('./app.js');
const { Server } = require('socket.io');
const http = require('http');

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET'],
  },
});

io.on('connection', (socket) => {
  setInterval(() => {
    const value = 'From server value';

    socket.emit('basicEmit', value, '2', Buffer.from([3]));
  }, 1000);
});

server.listen(3000, () => {
  console.log('server is running');
});
