export default class SignInPage extends HTMLElement {
  constructor() {
    super();
  }

  async mountSignIn() {
    document.querySelector<HTMLDivElement>('#cnt')!.innerHTML = `
<style>
  .sign-in__link-control {
    text-align: center;
    margin-top: 1.25rem;
  }

  .sign-in__link-control a {
    color: var(--white);
    font-size: var(--font-medium);
    display: inline;
    transition: color .3s;
    font-weight: 600;
  }

  .sign-in__link-control a:hover {
  border-bottom: none;
  color: var(--sky-shade-1); 
  border-bottom: 1px solid var(--white);
  }
</style>

<div id="sign-in" class="sign-in"></div>
`;

    const signInComponent = document.querySelector<HTMLDivElement>('#sign-in')!;
    const clerk = app.clerk;
    await clerk.load();

    clerk.mountSignIn(signInComponent, {
      routing: 'path',
      path: '/sign-in',
      signUpUrl: 'sign-up',
      afterSignInUrl: '/chatter',
      redirectUrl: '/',
    });
  }

  connectedCallback() {
    this.mountSignIn();
    this.mountBackButton();
  }

  mountBackButton() {
    const signUpControl = document.createElement('div');
    signUpControl.classList.add('sign-in__link-control');
    signUpControl.innerHTML = `<a href="/">Back to home &larr;</a>`;

    document
      .querySelector('#sign-in')
      ?.insertAdjacentElement('afterend', signUpControl);
  }
}

customElements.define('sign-in', SignInPage);
