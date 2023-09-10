const { app } = require('./app.js');
const { Server } = require('socket.io');
const http = require('http');
const formatMessage = require('./utils/messages');

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET'],
  },
});

// Run when client connects
io.on('connection', (socket) => {
  // Wemcome current user
  socket.emit('message', 'Welcome to the chatter room!');

  // Broadcast when user connects
  socket.broadcast.emit('message', 'An user has joined the chat...');

  // when disconnect
  socket.on('disconnect', () => {
    io.emit('message', 'An user has left the chat...');
  });

  // Listen for chatMessage
  socket.on('chatMessage', (msg) => {
    // const user = getCurrentUser(socket.id);

    // io.to(user.room).emit('message', formatMessage('Nemanja', msg));

    console.log(msg);

    io.emit('message', formatMessage('Nemanja', msg));
  });
});

server.listen(3000, () => {
  console.log('server is running');
});
