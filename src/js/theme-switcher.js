const switchTheme = () => {
  const rootEl = document.documentElement;
  let dataTheme = rootEl.getAttribute('data-theme'),
    newTheme;
  newTheme = dataTheme === 'light' ? 'dark' : 'light';

  rootEl.setAttribute('data-theme', newTheme);

  localStorage.setItem('theme', newTheme);
};

document
  .querySelector('#theme-switcher')
  .addEventListener('click', switchTheme);
