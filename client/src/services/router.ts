import ChatterPage from '../pages/ChatterPage';
import HomePage from '../pages/HomePage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import Navigation from '../components/Navigation';

const router = {
  init: () => {
    document.querySelectorAll('a.nav-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const url = link.getAttribute('href');
        router.go(url);
      });
    });

    // Event handler for url changes
    window.addEventListener('popstate', (e) => {
      router.go(e.state.route, false);
    });

    // Check the initial URL
    router.go(location.pathname);
  },

  go: (route, addToHistory = true) => {
    console.log(route);

    if (addToHistory) {
      history.pushState({ route }, '', route);
    }

    let pageElement = null;
    let navigation = null;

    if (route == '/') pageElement = new HomePage();
    else if (route == '/sign-in') pageElement = new SignInPage();
    else if (route == '/sign-in/factor-one') pageElement = new SignInPage();
    else if (route == '/sign-up') pageElement = new SignUpPage();
    else if (route == '/sign-up/verify-email-address')
      pageElement = new SignUpPage();
    else if (route == '/chatter') {
      pageElement = new ChatterPage();
      navigation = new Navigation();
    } else {
      pageElement = new HomePage();
    }

    if (pageElement) {
      const cacheMain = document.querySelector('#cnt');

      // clear dom before apending
      if (cacheMain.children[0]) cacheMain.children[0].remove();

      cacheMain.appendChild(pageElement);

      window.scrollX = 0;
      window.scrollY = 0;
    }

    if (navigation) {
      const cacheMain = document.querySelector('body');
      cacheMain?.appendChild(navigation);
    }
  },
};

const proxiedRouter = new Proxy(router, {
  get: (obj, prop) => {
    return Reflect.get(obj, prop);
  },
});

export default proxiedRouter;
