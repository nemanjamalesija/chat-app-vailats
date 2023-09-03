import './style.css';

import { io } from 'socket.io-client';

const socket = io('//localhost:3000');

window.addEventListener('DOMContentLoaded', () => {
  socket.on('basicEmit', (socket) => {
    console.log(socket);
  });

  return () => {
    socket.close();
  };
});
