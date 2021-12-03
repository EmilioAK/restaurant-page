export default () => {
  const main = document.createElement('main');
  
  const img = document.createElement('img');
  img.src = 'restaurant.jpg';
  img.alt = 'The beautiful restaurant';
  
  const about = document.createElement('div');
  about.classList.add('about')

  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = 'About:'

  const description = document.createElement('div');
  description.classList.add('description');
  description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  about.appendChild(title);
  about.appendChild(description);

  main.appendChild(img)
  main.appendChild(about);
  
  return main;
}