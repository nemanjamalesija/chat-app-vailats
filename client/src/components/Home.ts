import './css/home.css';

const homeContent = `
<style>

  .red {
    color: red;
  }

  h1 {
    background: var(--background);
    color: var(--color);
    padding: var(--padding);
    font-size: var(--font-size);
    border: 0;
  }
</style>
<h1 class="">Chatter</h1>
<p class="">Where real chatting happens</p>
`;

const template = document.createElement('template');
template.innerHTML = homeContent;

export default class HomePage extends HTMLElement {
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

customElements.define('home-page', HomePage);
