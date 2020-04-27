export function createMenuTab() {
  let contentTarget = document.querySelector('.content');
  let content = getMenuContent();
  contentTarget.appendChild(content);
}

function getMenuContent() {
  let newDiv = document.createElement('div');
  let menuHead = document.createElement('h3');
  let menuItems = {
    'Butter Crab': ['$19.99', 'images/butter_sm.jpg'],
    'Lemon Pepper Crab': ['$19.99', 'images/lemon_sm.jpg'],
    'Black Truffle Avocado Crab': ['$89.99', 'images/avocado_sm.jpg'],
    '55 Cancri f Spotted Brown Crab': ['$973,278.95', 'images/space_sm.jpg']
  };
  menuHead.textContent = 'Seasonal Menu';
  newDiv.appendChild(menuHead);
  for (let key in menuItems) {
    let itemImage = document.createElement('img');
    let itemDiv = document.createElement('div');
    let itemSpan = document.createElement('span');
    let paraName = document.createElement('p');
    let paraPrice = document.createElement('p');
    let itemName = key;
    let itemPrice = menuItems[key][0];
    itemImage.src = menuItems[key][1];
    itemImage.alt = key;
    itemDiv.classList.add('menu-item');
    paraName.textContent = itemName;
    paraPrice.textContent = itemPrice;
    itemSpan.append(paraName, paraPrice);
    itemSpan.classList.add('menu-price');
    itemDiv.append(itemImage, itemSpan);
    newDiv.appendChild(itemDiv);
  }
  return newDiv;
}
