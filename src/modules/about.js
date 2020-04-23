export function createAboutTab() {
  let contentTarget = document.querySelector('.content');
  let content = getAboutContent();
  contentTarget.appendChild(content);
}

function getAboutContent() {
  let newDiv = document.createElement('div');
  let head1 = document.createElement('h2');
  let head4 = document.createElement('h4');
  let motto = document.createElement('p');
  let quote = document.createElement('p');
  let author = document.createElement('span');
  head1.textContent = 'Canada\'s Space Crab Shack';
  head4.textContent = 'Why Canada\'s Space Crab Shack?';
  motto.textContent = 'We love crabs. Especially space crabs. And we cook them good, too.';
  quote.textContent = 'Their crabs are so good they gave my crabs crabs! ';
  quote.classList.add('quote');
  author.textContent = '- Johnathan "Johnny Johnson" Johnson';
  author.classList.add('quote-author');
  quote.appendChild(author);
  newDiv.append(head1, head4, motto, quote);
  return newDiv;
}
