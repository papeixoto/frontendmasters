const Store = {
  menu: null,
  cart: [],
};

const proxiedStore = new Proxy(Store, {
  set(target, key, value) {
    target[key] = value;
    if (key === "menu") {
      window.dispatchEvent(new CustomEvent("app-menu-changed"));
    }
    if (key === "cart") {
      window.dispatchEvent(new CustomEvent("app-cart-changed"));
    }
    return true;
  },
});

export default proxiedStore;
