import nav from "./components/nav.js";
import main from "./components/mainContent.js";

const content = document.getElementById('content');
content.appendChild(nav().nav);
content.appendChild(main());

nav().displayHome(function () {
  console.log('fitthora')
})
