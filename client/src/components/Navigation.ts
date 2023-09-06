const navContent =
  '<div class="nav-logo-control"><div> <img id="logo" src="https://ip.lfe.mw.tum.de/sections/moocus.png" alt="logo" /> </div><span>  chatter | app </span></div>';

export default class Navigation extends HTMLElement {
  constructor() {
    super();
  }

  // when the component is attached to the DOM
  connectedCallback() {
    if (!app.currentUser) app.router.go('/');
    document.querySelector('.nav')?.classList.remove('hiddens');

    this.addNavLogo();
    this.mountUserButton();
  }

  async mountUserButton() {
    const el = document.createElement('div');
    el.setAttribute('id', 'user-button');
    document.querySelector('.nav')?.appendChild(el);

    const userButtonComponent =
      document.querySelector<HTMLDivElement>('#user-button')!;

    const clerk = app.clerk;
    await clerk.load();

    clerk.mountUserButton(userButtonComponent, {});
  }

  addNavLogo() {
    document.querySelector('.nav')!.innerHTML = navContent;
  }
}

customElements.define('navigation-page', Navigation);
