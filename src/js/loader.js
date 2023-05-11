function loaderShow() {
  if (!document.querySelector('.wrap-spinner')) {
    console.log('hello loader');
    return;
  } else {
    document.querySelector('.wrap-spinner').classList.add('is-active');
  }
}

function loaderHide() {
  if (!document.querySelector('.wrap-spinner')) {
    return;
  } else {
    document.querySelector('.wrap-spinner').classList.remove('is-active');
  }
}

export { loaderShow, loaderHide };
