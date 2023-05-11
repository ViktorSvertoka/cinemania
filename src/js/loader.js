function createLoaderElements() {
  // overlay = document.createElement('div');
  // overlay.className = 'loader__overlay';
  // loader = document.createElement('div');
  // loader.className = 'loader';
  // document.body.appendChild(overlay);
  // document.body.appendChild(loader);
}

function loaderShow() {
  // if (!loader || !overlay) {
  //   createLoaderElements();
  // }
  // overlay.classList.add('is-active');
  document.querySelector('.wrap-spinner').classList.add('is-active');
}

function loaderHide() {
  // if (loader && overlay) {
  //   overlay.classList.remove('is-active');
  document.querySelector('.wrap-spinner').classList.remove('is-active');
  //   setTimeout(() => {
  //     overlay.remove();
  //     loader.remove();
  //   }, 500);
  // }
}

export { loaderShow, loaderHide };
