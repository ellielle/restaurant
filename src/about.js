export function createAboutTab() {
  let contentTarget = document.querySelector('.content');
  let content = getAboutContent();
  contentTarget.appendChild(content);
}

function getAboutContent() {
  let newDiv = document.createElement('div');
  let head1 = document.createElement('h1');
  let head4 = document.createElement('h4');
  let para1 = document.createElement('p');
  head1.textContent = "Canada's Space Crab Shack";
  head4.textContent = "Why Canada's Space Crab Shack?";
  para1.textContent = "We love crabs. Especially space crabs. And we cook them good, too.";
  newDiv.append(head1, head4, para1);
  return newDiv;
}
