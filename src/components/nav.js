export default () => {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  
  const home = document.createElement('li');
  home.textContent = 'Home';
  home.addEventListener('click', displayHome)
  
  const menu = document.createElement('li');
  menu.textContent = 'Menu';
  menu.addEventListener('click', displayMenu)

  const contact = document.createElement('li');
  contact.textContent = 'Contact';
  contact.addEventListener('click', displayContact)

  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(contact);

  nav.appendChild(ul);

  function displayHome(f) {
    f();
  }
  function displayMenu(f) {
    f();
  }
  function displayContact(f) {
    f();
  }

  return { nav, displayHome, displayMenu, displayContact }
}