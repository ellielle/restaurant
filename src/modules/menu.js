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
    '55 Cancri f Spotted Brown Crab': ['$973,278,123,873.95', 'images/space_sm.jpg']
  };
  menuHead.textContent = 'Seasonal Menu';
  newDiv.append(menuHead);
  return newDiv;
}
