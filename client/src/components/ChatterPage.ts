import Clerk from '@clerk/clerk-js';

const template = document.createElement('template');

const chat = '<div class="shadow-container">sirrrrrrrrrr</div>';
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
    if (!app.currentUser) app.router.go('/');
  }
}

customElements.define('chatter-page', ChatterPage);
