import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";
import { MenuPage } from "./components/MenuPage.js";
import { OrderPage } from "./components/OrderPage.js";
import { DetailsPage } from "./components/DetailsPage.js";

// making the store global
window.app = {};
app.store = Store;
app.router = Router;

// even though everything is parsed, we still need to wait for the DOM to be fully loaded
// "load" waits for everything: styles, images, videos, fonts,...
window.addEventListener("DOMContentLoaded", async () => {
  loadData();
  app.router.init();
});
