function loaderShow() {
  //   document.getElementById('loader').classList.add('is-active');
  const loader = document.createElement('div');
  loader.className = 'loader';
  document.body.appendChild(loader);
  //   document.body.style.overflow = 'hidden';
  loader.classList.add('is-active');
}

function loaderHide() {
  //   document.getElementById('loader').classList.remove('is-active');
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.remove('is-active');
    // document.body.style.overflow = '';
    setTimeout(() => {
      loader.remove();
    }, 500);
  }
}

export { loaderShow, loaderHide };
