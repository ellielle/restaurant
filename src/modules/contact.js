export function createContactTab() {
  let contentTarget = document.querySelector('.content');
  let content = getContactContent();
  contentTarget.appendChild(content);
}

function getContactContent() {
  let newDiv = document.createElement('div');
  let phone = document.createElement('p');
  let email = document.createElement('p');
  let addressStreet = document.createElement('p');
  let addressCity = document.createElement('p');
  let contactUs = document.createElement('h3');
  contactUs.textContent = "Contact Us"
  phone.textContent = '372-666-DOOM';
  phone.classList.add('phone');
  email.textContent = 'canadascrabs@cccrabs.ca';
  email.classList.add('email');
  addressStreet.textContent = '63 Crabby Blvd.';
  addressStreet.classList.add('address-st');
  addressCity.textContent = 'Canadia, ON, MD5 6D9, Canada';
  addressCity.classList.add('address-city');
  newDiv.append(contactUs, phone, email, addressStreet, addressCity);
  return newDiv;
}
