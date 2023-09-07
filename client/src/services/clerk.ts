import Clerk from '@clerk/clerk-js';
import { clerkPublicKey } from '../constants/clerkPublicKey';

const clerk = new Clerk(clerkPublicKey);
await clerk.load();

export default clerk;
