import Clerk from '@clerk/clerk-js';
import proxiedRouter from '../services/router';
import proxiedUserStore from '../services/userStore';

const template = document.createElement('template');

const chat = '<div class="shadow-container"></div>';
template.innerHTML = chat;

export default class ChatterPage extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' }).appendChild(
      template.content.cloneNode(true)
    );
  }

  // when the component is attached to the DOM
  connectedCallback() {
    if (!app.clerk.user) proxiedRouter.go('/');

    proxiedUserStore.id = crypto.randomUUID();
    proxiedUserStore.firstName = app.clerk.user.firstName;
    proxiedUserStore.lastName = app.clerk.user.lastName;
  }
}

customElements.define('chatter-page', ChatterPage);
