const inputSendMessageContent = `  
<style>
 .input-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--gray-light);
    padding: 0.5rem 0 0.5rem 1rem;
    }


 #message-input {
    flex-basis: 100%;
    height: 3rem;
    margin: 0 1.5rem;
    padding: 0 1rem;
    border: none;
    border-radius: 11px;
    font-size: .9rem;
    }


 #message-input:focus {
  border-color: var(--sky);
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  outline: none;
  }


 .btn-send {
  display: inline-block;
  border: none;
  cursor: pointer;
  padding: 0 2rem 0 0;
  }

 .input-area-icon {
  height: var(--font-xl); 
  var(--font-xl); 
  stroke: var(--sky);
  }
</style>

  <div class="input-area">

     <div class="input-area-icon-container">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
         class="input-area-icon">
         <path stroke-linecap="round" stroke-linejoin="round"
           d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
       </svg>
     </div>

     <input type="text" id="message-input" name="message-input" minlength="1" maxlength="500"
       placeholder="Write your message...">

     <button class="btn-send">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
         class="input-area-icon">
         <path stroke-linecap="round" stroke-linejoin="round"
           d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
       </svg>
     </button>

  </div> `;

const template = document.createElement('template');
template.innerHTML = inputSendMessageContent;

export default class InputSendMessage extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' }).appendChild(
      template.content.cloneNode(true)
    );
  }

  // when the component is attached to the DOM
  connectedCallback() {}
}

customElements.define('send-message-component', InputSendMessage);
