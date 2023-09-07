import proxiedUserStore from '../services/userStore';
import proxiedRouter from '../services/router';
import Channels from '../components/Channels';
import Chats from '../components/Chats';

const chatterPageContent = `<style>
  :host {
    background-color: var(--white);
    display: grid;
    grid-template-columns: 1.5fr 3fr;
    width: 100%;
    max-height: 600px;
    border-radius: var(--border-radius-small)
 

  }
</style>
`;

const template = document.createElement('template');
template.innerHTML = chatterPageContent;

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

    const channelsComponent = new Channels();
    const chatsComponent = new Chats();

    this.shadowRoot.appendChild(channelsComponent);
    this.shadowRoot.appendChild(chatsComponent);
  }
}

customElements.define('chatter-page', ChatterPage);
