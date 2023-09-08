import proxiedRouter from '../services/router';
import proxiedUserStore from '../services/userStore';

const navContent = `
<style>
 .nav {
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1.2rem 0.6rem 1.2rem;
  box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);
}

.nav-logo-control {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.nav-logo-control div {
  height: 2.8rem;
  width: 2.8rem;
  background: #2193b0;
  background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
  background: linear-gradient(to right, #6dd5ed, #2193b0);
}

.nav-logo-control span {
  color: var(--sky-shade-darkest);
  font-weight: 600;
  font-size: var(--base-size);
}

.nav img {
  height: 100%;
  width: 100%;
}

.cl-avatarBox {
  height: 2.8rem;
  width: 2.8rem;
}

.hiddens {
  visibility: hidden;
}
</style>

<div class="nav-logo-control">
      <div> 
        <img id="logo" src="https://ip.lfe.mw.tum.de/sections/moocus.png" alt="logo" /> 
      </div>
      <span>  chatter | app </span>
</div>
`;

export default class Navigation extends HTMLElement {
  constructor() {
    super();
  }

  // when the component is attached to the DOM
  connectedCallback() {
    if (!app.clerk.user) proxiedRouter.go('/');
    document.querySelector('.nav')?.classList.remove('hiddens');

    this.addNavLogo();
    this.mountUserButton();
  }

  async mountUserButton() {
    const el = document.createElement('div');
    el.setAttribute('id', 'user-button');
    document.querySelector('#nav')?.appendChild(el);

    const userButtonComponent =
      document.querySelector<HTMLDivElement>('#user-button')!;

    app.clerk.mountUserButton(userButtonComponent, {});
  }

  addNavLogo() {
    document.querySelector('#nav')!.innerHTML = navContent;
  }
}

customElements.define('navigation-component', Navigation);
