import { loadPage } from "./modules/common";
import { createAboutTab } from "./modules/about";
import { createContactTab } from "./modules/contact";
import { createMenuTab } from "./modules/menu";
import 'styles/style.scss';



const restaurant = (() => {
  'use strict';
  loadPage();
  createAboutTab();
  function changeTab(tab) {
    _destroyTab();
    let test = document.querySelector('btn-about');
    test.addEventListener('click', () => {
      console.log('hi');
    });
    // TODO call tab creation based on click event

  }
  function _destroyTab() {
    let tab = document.querySelector('.content');
    while (tab.firstChild) {
      tab.removeChild(tab.lastChild);
    }
  }

  return { changeTab }
})();

