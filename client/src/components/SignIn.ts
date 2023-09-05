import Clerk from '@clerk/clerk-js';
import { clerkPublicKey } from '../constants/clerkPublicKey.ts';

export default class SignInPage extends HTMLElement {
  constructor() {
    super();
  }

  async mountSignIn() {
    document.querySelector<HTMLDivElement>(
      '.cnt'
    )!.innerHTML = ` <div id="sign-in">
  <div class="text-center mb-5">
    <a href="/" class="text-white hover:text-sky-50 border-b border-white inline text-xl">Back to home &larr;</a>
  </div>
</div>
  `;

    const signInComponent = document.querySelector<HTMLDivElement>('#sign-in')!;
    const clerk = new Clerk(clerkPublicKey);
    await clerk.load();

    clerk.mountSignIn(signInComponent, {
      routing: 'path',
      path: '/sign-in',
      signUpUrl: 'sign-up',
      afterSignInUrl: '/',
      redirectUrl: '/',
    });
  }

  connectedCallback() {
    this.mountSignIn();
  }
}

customElements.define('sign-in', SignInPage);
