import { buildElement, buildLabel } from "./common";

export function createTabs() {
  let menuTabs = buildElement('div', 'tab-menu');
  let tabDiv = buildElement('div', 'tab');
  let contentDiv = buildElement('div', 'content');
  for (let i = 0; i <= 2; i++) {
    let tab = buildElement('input', '', `tab${i}`);
    tab.type = 'radio';
    tab.name = 'tab';
    let tabLabel = buildLabel('label', 'tab-btn',`tab${i}`);
    // TODO contentDiv.appendChild(content)
    tabDiv.appendChild(contentDiv);
    menuTabs.appendChild(tab);
    menuTabs.appendChild(tabLabel);
  }


  tabDiv.appendChild(contentDiv)

  document.querySelector('#content').prepend(menuTabs);
}


