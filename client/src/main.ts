import './style.css';

import { io } from 'socket.io-client';
import Clerk from '@clerk/clerk-js';
import router from './services/router.js';
import { clerkPublicKey } from './constants/clerkPublicKey.js';

window.app = {};
app.router = router;

window.addEventListener('DOMContentLoaded', async () => {
  app.router.init();
  const clerk = new Clerk(clerkPublicKey);
  await clerk.load();
  app.currentUser = clerk.user;

  const eventares = new Event('user-registered');
  window.dispatchEvent(eventares);
});

// const socket = io('//localhost:3000');

// window.addEventListener('DOMContentLoaded', () => {
//   socket.on('basicEmit', (socket) => {
//     console.log(socket);
//   });

//   return () => {
//     socket.close();
//   };
// });
