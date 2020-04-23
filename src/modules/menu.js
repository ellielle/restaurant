export function createMenuTab() {
  let contentTarget = document.querySelector('.content');
  let content = getMenuContent();
  contentTarget.appendChild(content);
}

function getMenuContent() {
  let newDiv = document.createElement('div');
  let menuHead = document.createElement('h1');
  let menuItems = {
    'Butter Crab': '$19.99',
    'Lemon Pepper Crab': '$19.99',
    'Black Truffle Avocado Crab': '$89.99',
    'Neptunian Purple Gaseous Crab': '$1487.95',
    '55 Cancri f Striped Brown Crab': '$973,278,123,873.95'
  };
  newDiv.append(menuHead);
  return newDiv;
}
