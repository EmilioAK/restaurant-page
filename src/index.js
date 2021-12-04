import "./main.css";
import nav from "./components/nav.js";
import home from "./components/home.js";
import menu from "./components/menu.js"
import contact from "./components/contact.js"

const navContainer = document.getElementById('nav');
const content = document.getElementById('content');

const render = (props) => {
  content.innerHTML = '';
  content.appendChild(props.section);
}
navContainer.appendChild(nav().render({
  displayHome: () => {render({
    section: home()
  })},
  displayMenu: () => {render({
    section: menu()
  })},
  displayContact: () => {render({
    section: contact()
  })}
}));
content.appendChild(home());
