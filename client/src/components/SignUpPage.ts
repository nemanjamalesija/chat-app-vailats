import Clerk from '@clerk/clerk-js';
import { clerkPublicKey } from '../constants/clerkPublicKey.ts';

export default class SignUpPage extends HTMLElement {
  constructor() {
    super();
  }

  async mountSignUp() {
    document.querySelector<HTMLDivElement>('.cnt')!.innerHTML = ` 
<div id="sign-up">
   <div class="text-center mb-5">
     <a href="/" class="text-white hover:text-sky-50 border-b border-white inline text-xl">Back to home &larr;</a>
   </div>
 </div>
  `;

    const signUpComponent = document.querySelector<HTMLDivElement>('#sign-up')!;
    const clerk = new Clerk(clerkPublicKey);
    await clerk.load();

    clerk.mountSignUp(signUpComponent, {
      routing: 'path',
      path: '/sign-up',
      signInUrl: 'sign-in',
      afterSignInUrl: '/chatter',
      redirectUrl: '/',
    });

    // document.querySelector('.cnt').children[0].remove();
    // clerk.openSignUp();

    const link = document.querySelector('.cl-footerActionLink');
    console.log(link);
  }

  connectedCallback() {
    this.mountSignUp();
  }
}

customElements.define('sign-up', SignUpPage);
