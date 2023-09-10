import './style.css';

import { io } from 'socket.io-client';
import Clerk from '@clerk/clerk-js';
import { clerkPublicKey } from './constants/clerkPublicKey.js';
import proxiedRouter from './services/router.js';
import proxiedUserStore from './services/userStore.js';

window.app = {};

window.addEventListener('DOMContentLoaded', async () => {
  const clerk = new Clerk(clerkPublicKey);
  await clerk.load();
  app.clerk = clerk;
  proxiedRouter.init();
});
