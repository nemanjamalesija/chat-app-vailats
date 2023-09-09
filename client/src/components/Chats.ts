import proxiedChatStore from '../services/chatsStore';
import InputSendMessage from './InputSendMessage';

const chatsContent = `
<style>
  :host {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
  }

  .chat-room {
  background-color: var(--gray-light);
  padding: 0.5rem 0 0rem 0.5rem;
  height: 60px;
  border-radius:  0 var(--border-radius-small) 0 0;
  display: flex;
  align-items: center;

}

.chat-room h2 {
font-size: var(--font-large);
color: var(--sky);

}

.chat-messages {
	padding:  1rem;
	max-height: 500px;
	overflow-y: scroll;
}

.chat-messages .message {
	padding: 5px 10px;
	margin-bottom: .6rem;
	border-radius: 5px;
  background-color: var(--gray-light);
}

.meta {
  font-size: var(--base);
	font-weight: 700;
	color: var(--sky);
	margin-bottom: 7px;
}

.chat-messages .message .meta span {
	color: #777;
  font-size:  var(--base);
}
</style>

      <section class="chats" id="#chats">

       <div class="chat-room">
         <h2>Select a room to start quacking</h2>
       </div>

       <div class="chat-messages">
         <div class="message">
           <p class="meta">Brad <span>9:12pm</span></p>
           <p class="text">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
             repudiandae.
           </p>
         </div>
         <div class="message">
           <p class="meta">Mary <span>9:15pm</span></p>
           <p class="text">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
             repudiandae.
           </p>
         </div>
       </div>

     </section> 
`;

const template = document.createElement('template');
template.innerHTML = chatsContent;

export default class Chats extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' }).appendChild(
      template.content.cloneNode(true)
    );
  }

  // when the component is attached to the DOM
  connectedCallback() {
    const inputSendMessage = new InputSendMessage();
    this.shadowRoot?.appendChild(inputSendMessage);
    this.setChannelName();
  }

  setChannelName() {
    const chatHeading = this.shadowRoot.querySelector('h2');

    // if (proxiedChatStore.activeChannel)
    //   chatHeading!.textContent = proxiedChatStore.activeChannel;
    window.addEventListener('activeChannelChange', () => {
      chatHeading!.textContent = proxiedChatStore.activeChannel;
      console.log(proxiedChatStore.activeChannel);
    });
  }
}

customElements.define('chats-component', Chats);
