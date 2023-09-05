import './style.css';

import { io } from 'socket.io-client';
import Clerk from '@clerk/clerk-js';
import router from './services/router.js';
import { clerkPublicKey } from './constants/clerkPublicKey.js';

window.app = {};
app.router = router;

window.addEventListener('DOMContentLoaded', async () => {
  const clerk = new Clerk(clerkPublicKey);
  await clerk.load();
  app.clerk = clerk;
  app.currentUser = clerk.user;
  window.dispatchEvent(new Event('user-registered'));
  app.router.init();
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
