import Clerk from '@clerk/clerk-js';
import { clerkPublicKey } from '../constants/clerkPublicKey.ts';

export default class SignUpPage extends HTMLElement {
  constructor() {
    super();
  }

  async mountSignUp() {
    document.querySelector<HTMLDivElement>(
      '.cnt'
    )!.innerHTML = ` <div id="sign-up"></div>
  `;

    const signUpComponent = document.querySelector<HTMLDivElement>('#sign-up')!;
    const clerk = new Clerk(clerkPublicKey);
    await clerk.load();

    clerk.mountSignUp(signUpComponent, {});
  }

  connectedCallback() {
    this.mountSignUp();
  }
}

customElements.define('sign-up', SignUpPage);
