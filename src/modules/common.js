export function loadPage() {
  let body = document.querySelector('body');
  let flexContainer = buildElement('div', 'flex-container');
  let containerContent = buildElement('div', '', 'content-container');
  let headContent = buildElement('div', '', 'header-container');
  let headerImage = document.createElement('img');
  let tabList = buildElement('div', 'tab-list');
  let tabAbout = buildTabMenu('tab-about');
  let labelAbout = buildLabel('label', 'tab-btn', 'tab-about');
  let tabMenu = buildTabMenu('tab-menu');
  let labelMenu = buildLabel('label', 'tab-btn', 'tab-menu');
  let tabContact = buildTabMenu('tab-contact');
  let labelContact = buildLabel('label', 'tab-btn', 'tab-contact');
  let contentDiv = buildElement('div', 'content');
  tabAbout.checked = true;
  headerImage.src = "images/header.png";
  headerImage.alt = "It's a crab.";
  headerImage.classList.add('header-image');
  tabList.append(tabAbout, labelAbout, tabMenu, labelMenu, tabContact, labelContact);
  headContent.appendChild(headerImage);
  containerContent.append(tabList, contentDiv);
  flexContainer.append(headContent, containerContent);
  body.appendChild(flexContainer);
}

function buildElement(element, elementClass, elementID = '') {
  let newElement = document.createElement(`${element}`);
  if (elementClass !== '') {
    newElement.classList.add(elementClass);
  }
  if (elementID !== '') {
    newElement.id = elementID;
  }
  return newElement;
}

function buildLabel(element, elementClass, elementFor) {
  let newLabel = document.createElement(`${element}`);
  let text = elementFor.split('-')[1];
  text = text.charAt(0).toUpperCase() + text.slice(1);
  newLabel.htmlFor = `${elementFor}`;
  newLabel.classList.add(elementClass);
  newLabel.textContent = text;
  return newLabel;
}

function buildTabMenu(id) {
  let newTab = buildElement('input', '', id);
  newTab.type = 'radio';
  newTab.name = 'tab';
  return newTab;
}

