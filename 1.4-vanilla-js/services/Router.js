const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        // const url = a.href;
        // const url = a.getAttribute("href");
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
      // Check the initial url
      const initialUrl = location.pathname;
      Router.go(initialUrl);
    });

    // event handler for url changes
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });
  },
  go: (route, addToHistory = true) => {
    console.log("going to route", route);

    if (addToHistory) {
      history.pushState({ route }, "", route);
    }

    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("menu-page");
        break;
      case "/order":
        pageElement = document.createElement("order-page");
        break;
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("details-page");
          const paramId = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.productId = paramId;
        }
        break;
    }
    if (pageElement) {
      const cache = document.querySelector("main");
      // cache.children[0].remove();
      cache.innerHTML = "";
      cache.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
