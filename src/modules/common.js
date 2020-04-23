export function loadPage() {
  let body = document.querySelector('body');
  let containerContent = buildElement('div', '', 'content-container');
  let headContent = buildElement('div', '', 'content-header');
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
  headerImage.src = "header.jpg";
  headerImage.alt = "It's a crab.";
  headerImage.classList.add('header-image');
  tabList.append(tabAbout, labelAbout, tabMenu, labelMenu, tabContact, labelContact, contentDiv);
  headContent.appendChild(headerImage);
  containerContent.appendChild(tabList);
  body.append(headContent, containerContent);
}

export function buildElement(element, elementClass, elementID = '') {
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
  newLabel.htmlFor = `${elementFor}`;
  newLabel.classList.add(elementClass);
  return newLabel;
}

function buildTabMenu(id) {
  let newTab = buildElement('input', '', id);
  newTab.type = 'radio';
  newTab.name = 'tab';
  return newTab;
}

