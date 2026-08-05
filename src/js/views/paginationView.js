import View from './View.js';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkUp() {
    const cur_page = this._data.page;
    const numPage = Math.ceil(
      this._data.results.length / this._data.resultsPerPage,
    );

    //page 1 and there are other pages
    if (cur_page === 1 && numPage > 1) {
      return `
        <button data-goto=${cur_page + 1} class="btn--inline pagination__btn--next">
            <span>Page ${cur_page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
      `;
    }

    //last page
    if (cur_page === numPage && numPage > 1) {
      return `
        <button data-goto=${cur_page - 1} class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${cur_page - 1}</span>
        </button>
      `;
    }

    //other page
    if (cur_page < numPage) {
      return `
        <button data-goto=${cur_page - 1} class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${cur_page - 1}</span>
        </button>
        <button data-goto=${cur_page + 1} class="btn--inline pagination__btn--next">
            <span>Page ${cur_page + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
      `;
    }

    //page 1 and there are no other pages
    return '';
  }
}

export default new PaginationView();
