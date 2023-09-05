import ChatterPage from '../components/ChatterPage';
import HomePage from '../components/HomePage';
import SignInPage from '../components/SignInPage';
import SignUpPage from '../components/SignUpPage';

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
    console.log(app.session);
    if (addToHistory) {
      history.pushState({ route }, '', route);
    }

    let pageElement = null;

    if (route == '/') pageElement = new HomePage();

    if (route === '/sign-in') pageElement = new SignInPage();

    if (route === '/sign-up') new SignUpPage();

    if (route === '/chatter') pageElement = new ChatterPage();
    else {
      pageElement = new HomePage();
    }

    if (pageElement) {
      const cacheMain = document.querySelector('.cnt');

      // clear dom before apending
      if (cacheMain.children[0]) cacheMain.children[0].remove();

      cacheMain.appendChild(pageElement);

      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default router;
