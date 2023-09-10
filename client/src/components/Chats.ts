import proxiedChatStore from '../services/chatsStore';
import InputSendMessage from './InputSendMessage';
import { io } from 'socket.io-client';

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
	max-height: 400px;
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

       <div class="chat-messages"></div>     

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

    // Message from server
    app.socket.on('message', (message) => {
      this.outputMessage(message);
    });
  }

  setChannelName() {
    const chatHeading = this.shadowRoot!.querySelector('h2');

    window.addEventListener('activeChannelChange', () => {
      this.shadowRoot!.querySelector('.chat-messages')!.innerHTML = '';
      chatHeading!.textContent = proxiedChatStore.activeChannel;
    });
  }

  // Output message to DOM
  outputMessage(message: {
    username: string;
    room: string;
    text: string;
    time: Date;
  }) {
    if (!message.username) return;

    if (message.room.trim() === proxiedChatStore.activeChannel) {
      const div = document.createElement('div');
      div.classList.add('message');
      const p = document.createElement('p');
      p.classList.add('meta');
      p.innerText = message.username;
      p.innerHTML += `<span> ${message.time}</span>`;
      div.appendChild(p);
      const para = document.createElement('p');
      para.classList.add('text');
      para.innerText = message.text;
      div.appendChild(para);
      this.shadowRoot!.querySelector('.chat-messages')!.appendChild(div);

      //view stays always at the bottom
      const chatMessages = this.shadowRoot!.querySelector('.chat-messages');
      chatMessages!.scrollTop = chatMessages!.scrollHeight;
    }
  }
}

customElements.define('chats-component', Chats);
