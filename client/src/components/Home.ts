const homeContent = ` 
      
          <h1 class="text-4xl font-bold text-cyan-600">Chatter</h1>
          <p class="text-xl text-[#333]">Where real chatting happens</p>
     `;

export default class HomePage extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = homeContent;
  }

  // when the component is attached to the DOM
  connectedCallback() {
    this.innerHTML = homeContent;
  }
}

customElements.define('home-page', HomePage);
