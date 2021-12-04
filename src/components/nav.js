function renderNavItem(props) {
  const item = document.createElement('li');
  item.textContent = props.textContent;
  item.addEventListener('click', props.onClick);
  return item;
}

export default () => {
  function render(props) {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    
    const home = renderNavItem({
      textContent: 'Home',
      onClick: props.displayHome
    })
    const menu = renderNavItem({
      textContent: "Menu",
      onClick: props.displayMenu
    })
    const contact = renderNavItem({
      textContent: "Contact",
      onClick: props.displayContact
    })
  
    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(contact);
  
    nav.appendChild(ul);
    
    return nav
  }
  return { render }
}