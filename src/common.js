export function loadPage() {
  let content = document.querySelector('#content');
  let headContent = document.querySelector('#content-header');
  let headerImage = document.createElement('img');
  let newDiv = document.createElement('div');
  headerImage.src = "header.jpg";
  headerImage.alt = "It's a crab.";
  headerImage.classList.add('header-image');
  headContent.appendChild(headerImage);
  let head1 = document.createElement('h1');
  let head4 = document.createElement('h4');
  let para1 = document.createElement('p');
  head1.textContent = "Canada's Space Crab Shack";
  head4.textContent = "Why Canada's Space Crab Shack?";
  para1.textContent = "We love crabs. Especially space crabs. And we cook them good, too.";
  newDiv.append(head1, head4, para1);
  content.appendChild(newDiv);
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

export function buildLabel(element, elementClass, elementFor) {
  let newLabel = document.createElement(`${element}`);
  newLabel.htmlFor = `${elementFor}`;
  newLabel.classList.add(elementClass);
  return newLabel;
}
