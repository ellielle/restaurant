export function createContactTab() {
  let contentTarget = document.querySelector('.content');
  let content = getContactContent();
  contentTarget.appendChild(content);
}

function getContactContent() {
  let newDiv = document.createElement('div');
  return newDiv;
}
