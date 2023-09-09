import proxiedChatStore from '../services/chatsStore';

const homeContent = `
<style>
  .channels-section {
  border-right: 1px solid var(--gray-light-2);

}

  .channels-header {
  background-color: var(--gray-light);
  padding: 0.5rem 0 0rem 0.5rem;
  height: 60px;
  border-radius:  var(--border-radius-small) 0 0 0;
  display: flex;
  align-items: center;
}

  .channels-logo {
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--sky);
  margin-right: 0.5rem;

}


  .channels-heading {
 font-size: var(--font-large);
  color: var(--sky);
  font-weight: bold;

}

  .channels-category-title {
  font-size: var(--base);
  padding: 1rem;
  padding-bottom: 0;
  margin: 0;
  padding: 1.25rem 1rem;
  padding-left: 0.5rem;
  font-weight: 700;
  color: var(--sky);
  border-bottom: 1px solid var(--gray-light);
}

  .channels-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

  .channels-list-item {
  padding: 1.25rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all .3s;
}

.channels-list-item:not(:last-child) {
  border-bottom: 1px solid var(--gray-light);
}

  .channel-active {
    background-color: var(--gray-light);
    border-right: 3px solid var(--sky);
   }

  .channels-text {
  font-size: 1rem;
  font-weight: 500;
  color: var(--gray-primary);
}

  .channels-small-text {
  font-size: 0.75rem;
  color: #555;
}
</style>

 <section class="channels-section">

  <div class="channels-header">
    <img
      id="logo"
      src="https://ip.lfe.mw.tum.de/sections/moocus.png"
      alt="logo"
      class="channels-logo"
    />
    <h1 class="channels-heading">chatter | app</h1>
  </div>

    
  <div class="channels-content">

    <div class="channels-category">
      <h2 class="channels-category-title">Rooms</h2>
      <ul class="channels-list">
        <li class="channels-list-item">
          <span class="channels-text">General discussions</span>
          <span class="channels-small-text">11:51</span>
        </li>
        <li class="channels-list-item">
          <span class="channels-text">Javascript</span>
          <span class="channels-small-text">11:51</span>
        </li>
        <li class="channels-list-item">
          <span class="channels-text">React</span>
          <span class="channels-small-text">11:51</span>
        </li>
         <li class="channels-list-item">
          <span class="channels-text">Vue</span>
          <span class="channels-small-text">Yesterday</span>
        </li>
         <li class="channels-list-item">
          <span class="channels-text">Node</span>
          <span class="channels-small-text">23 May 2018</span>
        </li>
        <li class="channels-list-item">
          <span class="channels-text">Angular</span>
          <span class="channels-small-text">23 May 2018</span>
        </li>
         <li class="channels-list-item">
          <span class="channels-text">Next js</span>
          <span class="channels-small-text">23 May 2018</span>
        </li>
      </ul>
    </div>

   </div>
 
</section>
`;

const template = document.createElement('template');
template.innerHTML = homeContent;

export default class Channels extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' }).appendChild(
      template.content.cloneNode(true)
    );
  }

  // when the component is attached to the DOM
  connectedCallback() {
    this.setActiveChannel();
  }

  setActiveChannel() {
    const channels = this.shadowRoot?.querySelectorAll('li');

    channels?.forEach((chan) => {
      chan.addEventListener('click', (e) => {
        // Remove the "channel-active" class from all channels first
        channels.forEach((c) => {
          c.classList.remove('channel-active');
        });

        // Add the "channel-active" class to the clicked channel
        chan.classList.add('channel-active');

        // select first span in the li to get the text content
        const activeChannelText = chan.querySelector('span');
        proxiedChatStore.activeChannel = activeChannelText!
          .textContent as string;
      });
    });
  }
}

customElements.define('channels-component', Channels);
