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
  buildQuoteSection();
  buildFooter();
}

function buildFooter() {
  let anchor = document.createElement('a');
  let quote = document.querySelector('.quote');
  let footer = document.createElement('footer');
  let github = document.createElement('img');
  anchor.href = "https://github.com/ellielle/restaurant";
  github.src = "images/github.png";
  github.alt = "Github link";
  github.classList.add('github-logo');
  anchor.appendChild(github);
  footer.appendChild(anchor);
  quote.appendChild(footer);
}

function buildQuoteSection() {
  let body = document.querySelector('body');
  let quoteDiv = document.createElement('div');
  let quote = document.createElement('p');
  let author = document.createElement('span');
  quoteDiv.classList.add('quote');
  quote.textContent = 'Their crabs are so good they gave my crabs crabs!';
  author.textContent = ' - Johnathan "Johnny Johnson" Johnson';
  author.classList.add('quote-author');
  quote.appendChild(author);
  quoteDiv.appendChild(quote);
  body.appendChild(quoteDiv);
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

