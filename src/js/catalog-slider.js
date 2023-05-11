import APIService from './api-service-main';
import renderMoviesCards from './cards-rendering';
import { loaderShow, loaderHide } from './loader';
const apiService = new APIService();
let currentQuary;

export default function renderPagination(currentPage, totalPages, query) {
  const paginationCont = document.querySelector('.pagination');
  paginationCont.innerHTML = '';

  if (arguments.length < 3) {
    query = null;
  }
  currentQuary = query;
  let buttons = [];

  if (totalPages === 2) {
    if (currentPage === totalPages) {
      buttons.push(createButton(currentPage - 1, true, 'button-arrow-left'));
      buttons.push(createButton(currentPage - 1));
      buttons.push(createButton(totalPages, false));

      buttons.forEach(button => paginationCont.append(button));
      return;
    }

    buttons.push(createButton(currentPage, false));
    buttons.push(createButton(totalPages));
    buttons.push(createButton(currentPage + 1, true, 'button-arrow-right'));
    buttons.forEach(button => paginationCont.append(button));
    return;
  }
  if (currentPage > 1) {
    buttons.push(createButton(currentPage - 1, true, 'button-arrow-left'));
  }

  if (currentPage >= 4) {
    buttons.push(createButton(1, true, 'first-button'));
  }

  if (currentPage >= 4) {
    buttons.push(createDotsEl());
  }

  if (currentPage >= 2) {
    if (currentPage === 3) {
      buttons.push(createButton(currentPage - 2));
    }
    buttons.push(createButton(currentPage - 1));
  }

  buttons.push(createButton(currentPage, false));

  if (currentPage <= totalPages - 1) {
    buttons.push(createButton(currentPage + 1));
    if (currentPage === 1) {
      buttons.push(createButton(currentPage + 2));
    }
  }

  if (currentPage < totalPages - 2 && totalPages > 4) {
    buttons.push(createDotsEl());
  }

  if (currentPage <= totalPages - 2 && totalPages >= 4) {
    buttons.push(createButton(totalPages, true, 'last-button'));
  }

  if (currentPage < totalPages) {
    buttons.push(createButton(currentPage + 1, true, 'button-arrow-right'));
  }

  buttons.forEach(button => paginationCont.append(button));
}

function createBaseButton() {
  const baseButton = document.createElement('button');
  baseButton.classList.add('pagination-button');
  return baseButton;
}

function createDotsEl() {
  const newDotsEl = document.createElement('span');
  newDotsEl.innerHTML = `<span class="dots">...</span>`;
  return newDotsEl;
}

function createButton(
  pageNum,
  isButtonClickable = true,
  additionalClass = null
) {
  const newButton = createBaseButton();
  newButton.dataset['page'] = pageNum;
  newButton.textContent = newButton.textContent =
    additionalClass && additionalClass.includes('arrow')
      ? ''
      : pageNum < 10
      ? '0' + pageNum
      : pageNum;

  if (additionalClass) {
    newButton.classList.add(additionalClass);
  }

  if (isButtonClickable) {
    newButton.addEventListener('click', pageButtonPressed);
  } else {
    newButton.classList.add('pagination-button-current');
  }

  return newButton;
}

async function pageButtonPressed(event) {
  const page = event.target.dataset.page;
  const catalogForm = document.querySelector('.catalog__form');
  loaderShow();

  try {
    if (currentQuary === null) {
      const response = await apiService.getTrends('week', page);
      const movies = response.results;

      renderMoviesCards(movies, '.cards__list');

      renderPagination(response.page, response.total_pages);
    } else {
      const response = await apiService.searchMovieByQuery(currentQuary, page);

      const movies = response.results;

      renderMoviesCards(movies, '.cards__list');
      renderPagination(response.page, response.total_pages, currentQuary);
    }
    catalogForm.scrollIntoView({ behavior: 'smooth' });
    loaderHide();
  } catch (error) {
    console.log(error);
    loaderHide();
  }
}
