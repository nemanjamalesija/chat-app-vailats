import HomePage from '../components/Home';
import SignInPage from '../components/SignIn';
import SignUpPage from '../components/SignUp';

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
    if (addToHistory) {
      history.pushState({ route }, '', route);
    }

    let pageElement = null;

    switch (route) {
      case '/':
        pageElement = new HomePage();

        break;
    }

    switch (route) {
      case 'sign-in':
        pageElement = new SignInPage();

        break;
    }

    switch (route) {
      case 'sign-up':
        pageElement = new SignUpPage();

        break;
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
