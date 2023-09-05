export default class UserButton extends HTMLElement {
  constructor() {
    super();
  }

  // when the component is attached to the DOM
  connectedCallback() {
    if (!app.currentUser) app.router.go('/');
    document.querySelector('.nav')?.classList.remove('hiddens');

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
}

customElements.define('user-button', UserButton);
