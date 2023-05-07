// const teamLink = document.querySelector('.footer__link');
// const teamBackdrop = document.querySelector('.team__backdrop');
// const teamCloseBtn = document.querySelector('.team__modal-close-btn');
// const modalScroll = document.querySelector('.modal-scroll');
// const options = {
//   rootMargin: '100px',
//   threshold: 1.0,
// };
// const isTeamListenerActive = teamLink.dataset.event;

// const observer = new IntersectionObserver(
//   toggleListenerByIntersection,
//   options
// );

// function onLinkClick(event) {
//   event.preventDefault();

//   teamBackdrop.classList.remove('is-hidden');
//   document.body.classList.add('modal-open');

//   addAllEventListeners();
// }

// function onEscClick(event) {
//   event.preventDefault();

//   if (event.code !== 'Escape') {
//     return;
//   }

//   closingModalStaff();
// }

// function onBackdropClick(event) {
//   if (event.target.closest('.team__wrapper')) {
//     return;
//   }

//   closingModalStaff();
// }

// function onCloseBtnClick(event) {
//   event.preventDefault();

//   closingModalStaff();
// }

// function addAllEventListeners() {
//   document.addEventListener('keydown', onEscClick);
//   teamBackdrop.addEventListener('click', onBackdropClick);
//   teamCloseBtn.addEventListener('click', onCloseBtnClick);
// }

// function closingModalStaff() {
//   document.removeEventListener('keydown', onEscClick);
//   teamBackdrop.removeEventListener('click', onBackdropClick);
//   teamCloseBtn.removeEventListener('click', onCloseBtnClick);

//   teamBackdrop.classList.add('is-hidden');
//   document.body.classList.remove('modal-open');
// }

// function toggleListenerByIntersection(entries) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       teamLink.addEventListener('click', onLinkClick);
//       teamLink.dataset.event = 'true';
//     }

//     if (!entry.isIntersecting) {
//       teamLink.removeEventListener('click', onLinkClick);
//       teamLink.dataset.event = 'false';
//     }
//   });
// }

// setTimeout(() => {
//   observer.observe(modalScroll);
// }, 1000);

const teamLink = document.querySelector('.footer__link');
const teamBackdrop = document.querySelector('.team__backdrop');
const teamCloseBtn = document.querySelector('.team__modal-close-btn');

function openModal() {
  teamBackdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeModal);
  teamBackdrop.addEventListener('click', closeModal);
  teamCloseBtn.addEventListener('click', closeModal);
}

function closeModal(event) {
  if (event.type === 'keydown' && event.code !== 'Escape') {
    return;
  }
  teamBackdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeModal);
  teamBackdrop.removeEventListener('click', closeModal);
  teamCloseBtn.removeEventListener('click', closeModal);
}

teamLink.addEventListener('click', event => {
  event.preventDefault();
  openModal();
});
