import Clerk from '@clerk/clerk-js';
import proxiedRouter from '../services/router';
import currentUser from '@clerk/clerk-js';
import { clerkPublicKey } from '../constants/clerkPublicKey';
import proxiedClerk from '../services/clerk';
import clerk from '../services/clerk';

const homeContent = `
<style>
.channels-section {
  border-right: 1px solid #ccc;

}

.channels-header {
  background-color: #f0f0f0;
  padding: 0.5rem 0 0rem 0.5rem;
  height: 60px;
}

.channels-logo {
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--sky);
  margin-right: 0.5rem;
  display: inline;
  vertical-align: bottom;
}


.channels-heading {
 font-size: var(--font-large);
  color: var(--sky);
  font-weight: bold;
  display: inline;
  vertical-align: bottom;
}

.channels-category-title {
  font-size: var(--base);
  padding: 1rem;
  padding-bottom: 0;
  padding-left: 0.5rem;
 font-weight: 700;
  color: var(--sky);
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
  margin-bottom: 0.5rem;
}

.channel-active {
  background-color: #f0f0f0;
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
        <li class="channels-list-item channel-active">
          <span class="channels-text">MeetUp</span>
          <span class="channels-small-text">11:51</span>
        </li>
        <li class="channels-list-item">
          <span class="channels-text">OctobarFest</span>
          <span class="channels-small-text">11:51</span>
        </li>
 <li class="channels-list-item">
          <span class="channels-text">WeatherChannel</span>
          <span class="channels-small-text">Yesterday</span>
        </li>
     <li class="channels-list-item">
          <span class="channels-text">SeventContinents</span>
          <span class="channels-small-text">23 May 2018</span>
        </li>
      </ul>
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
  connectedCallback() {}
}

customElements.define('channels-component', Channels);
