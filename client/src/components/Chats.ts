const homeContent = `
<style>
.chat-room {
background-color: #f0f0f0;
 padding: 0.5rem 0 0rem 0.5rem;
height: 60px;

}

.chat-room h2 {
font-size: var(--font-large);
color: var(--sky);

}

.chat-messages {
	padding: 0 1rem;
	max-height: 500px;
	overflow-y: scroll;
}

.chat-messages .message {
	padding: 10px;
	margin-bottom: .6rem;
	background-color: var(--light-color);
	border-radius: 5px;
}

.chat-messages .message .meta {
  font-size: var(--base);
	font-weight: 700;
	color: var(--sky);
	margin-bottom: 7px;
}

.chat-messages .message .meta span {
	color: #777;
}

</style>

      <section class="chats" id="#chats">

   <div class="chat-room">
          <h2 class="font-bold text-2xl text-cyan-600">MeetUp</h2>
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
template.innerHTML = homeContent;

export default class Chats extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' }).appendChild(
      template.content.cloneNode(true)
    );
  }

  // when the component is attached to the DOM
  connectedCallback() {}
}

customElements.define('chats-component', Chats);
