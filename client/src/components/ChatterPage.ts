import Clerk from '@clerk/clerk-js';

const template = document.createElement('template');

const chat = '<h1>aaaa</h1>';
template.innerHTML = chat;

export default class ChatterPage extends HTMLElement {
  red = false;
  constructor() {
    super();

    this.attachShadow({ mode: 'open' }).appendChild(
      template.content.cloneNode(true)
    );
  }

  // when the component is attached to the DOM
  connectedCallback() {
    const h1 = this.shadowRoot?.querySelector('h1');
    h1.classList.add('px-5', 'py-5');
    h1?.addEventListener('click', () => {
      this.changeBg();
    });
  }

  changeBg() {
    this.shadowRoot?.querySelector('h1')?.classList.toggle('red');
  }
}

customElements.define('chatter-page', ChatterPage);
