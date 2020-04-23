import { loadPage } from "./modules/common";
import { createAboutTab } from "./modules/about";
import { createContactTab } from "./modules/contact";
import { createMenuTab } from "./modules/menu";
import './styles/style.scss';

loadPage();
createAboutTab(); // TODO remove, just for testing

(function createEventListeners() {
  let inputTabs = document.querySelectorAll('input');
  inputTabs.forEach(tab => {
    let tabType = tab.id.split('-')[1];
    tab.addEventListener('click', () => {
      restaurant.changeTab(tabType);
    });
  });
})();

const restaurant = (() => {
  function changeTab(tabType) {
    _destroyTab();
    switch (tabType) {
      case 'about':
        createAboutTab();
        break;
      case 'contact':
        createContactTab();
        break;
      case 'menu':
        createMenuTab();
        break;
      default:
        alert('why');
    }
  }
  function _destroyTab() {
    let tab = document.querySelector('.content');
    while (tab.firstChild) {
      tab.removeChild(tab.lastChild);
    }
  }
  return { changeTab }
})();

