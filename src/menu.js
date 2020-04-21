export function createMenuTab() {
  let contentTarget = document.querySelector('.content');
  let content = getMenuContent();
  contentTarget.appendChild(content);
}

function getMenuContent() {
  let newDiv = document.createElement('div');

  return newDiv;
}
