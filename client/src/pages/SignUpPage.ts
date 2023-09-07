export default class SignUpPage extends HTMLElement {
  constructor() {
    super();
  }

  async mountSignUp() {
    document.querySelector<HTMLDivElement>('#cnt')!.innerHTML = ` 
<style>
  .sign-up__link-control {
    text-align: center;
    margin-top: 1.25rem;
  }

  .sign-up__link-control a {
    color: var(--white);
    font-size: var(--font-medium);
    font-weight: 600;

    display: inline;
    transition: color .3s;
  }

  .sign-up__link-control a:hover {
  border-bottom: none;
  color: var(--sky-shade-1); 
  border-bottom: 1px solid var(--white);
  }
</style>

<div id="sign-up" class="sign-up"></div>
  `;

    const signUpComponent = document.querySelector<HTMLDivElement>('#sign-up')!;

    app.clerk.mountSignUp(signUpComponent, {
      routing: 'path',
      path: '/sign-up',
      signInUrl: '/sign-in',
      afterSignInUrl: '/chatter',
      redirectUrl: '/',
    });
  }

  connectedCallback() {
    this.mountSignUp();
    this.mountBackButton();
  }

  mountBackButton() {
    const signUpControl = document.createElement('div');
    signUpControl.classList.add('sign-up__link-control');
    signUpControl.innerHTML = `<a href="/">Back to home &larr;</a>`;

    document
      .querySelector('#sign-up')
      ?.insertAdjacentElement('afterend', signUpControl);
  }
}

customElements.define('sign-up', SignUpPage);
