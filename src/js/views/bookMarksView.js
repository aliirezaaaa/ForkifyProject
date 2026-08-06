import View from './View.js';
import icons from '../../img/icons.svg';
import previewView from './previewView.js';

class BookMarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bppkmarks yet! Find a nice recipe and bookmark it ;)';
  _message = '';

  _generateMarkUp() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join();
  }
}

export default new BookMarksView();
