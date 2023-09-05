import Clerk from '@clerk/clerk-js';
import { clerkPublicKey } from '../constants/clerkPublicKey.ts';

export default class SignInPage extends HTMLElement {
  constructor() {
    super();
  }

  async mountSignIn() {
    document.querySelector<HTMLDivElement>(
      '.cnt'
    )!.innerHTML = ` <div id="sign-in"></div>
  `;

    const signInComponent = document.querySelector<HTMLDivElement>('#sign-in')!;
    const clerk = new Clerk(clerkPublicKey);
    await clerk.load();

    clerk.mountSignIn(signInComponent, {});
  }

  connectedCallback() {
    this.mountSignIn();
  }
}

customElements.define('sign-in', SignInPage);
