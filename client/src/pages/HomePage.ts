import Clerk from '@clerk/clerk-js';
import proxiedRouter from '../services/router';
import currentUser from '@clerk/clerk-js';
import { clerkPublicKey } from '../constants/clerkPublicKey';
import proxiedClerk from '../services/clerk';
import clerk from '../services/clerk';

const homeContent = `
<style>
  .img-logo-control {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  img {
    display: inline;
    vertical-align: bottom;
    height: 9.5rem;
    width: 9.5rem;
  }

  h1 {
    font-size: 4.8rem;
    color: var(--white);
    margin: 0;
    text-align: center;
    display: inline;
    vertical-align: bottom;

  }

  p {
    font-size: 1.5rem;
    margin: 0;
    font-weight: 500;
    margin-bottom: 1.2rem;
    text-align: center;
    color: var(--white);
    opacity: 0.9;
  }

  .btn-control {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    }

   a {
   padding: 0.5rem 2rem;
   background-color: var(--white);
   border-radius: var(--border-radius-small);
   text-decoration: none;
   font-size: var(--font-medium);
   font-weight: 700;
   color: var(--gray-primary);
   transition: all 0.3s;
    
   }
 
a:hover {
  background-color: var(--sky-shade-1);
  transform: scale(1.1);
  box-shadow: 0 1rem 2rem rgba(0,0,0,0.1);
 }


a:last-child {
  background-color: var(--sky);
  color: var(--white);
}

a:last-child:hover {
  background-color: var(--sky-shade-dark);
}
</style>


<div class="img-logo-control">
  <img id="logo" src="https://ip.lfe.mw.tum.de/sections/moocus.png" alt="logo" class="h-14 w-14 bg-sky-600 inline" />
  <h1 class="heading-primary text-xl text-sky-600 font-bold inline align-bottom">
    chatter | app
  </h1>
</div>



<p>Connect with people around the world and talk about the things that interest you.</p>

<div class="btn-control">
  <a class="nav-link" href="/sign-in">Sign in</a>
  <a class="nav-link" href="/sign-up">Sign up</a>
</div>

`;

const template = document.createElement('template');
template.innerHTML = homeContent;

export default class HomePage extends HTMLElement {
  constructor() {
    super();
  }

  // when the component is attached to the DOM
  connectedCallback() {
    if (app.clerk.user) proxiedRouter.go('/chatter');
    else
      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      );
  }
}

customElements.define('home-page', HomePage);
