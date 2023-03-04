import View from "./view.js";
import previewView from "./previewView.js";
import icons from 'url:../../img/icons.svg'

class resultsView extends View {
    _parentEl = document.querySelector('.results')
    _errorMessage = 'No results for your query. Try again!'
    _message = ''

    _generateMarkup () {
        return this._data.map(bookmark => previewView.render(bookmark, false)).join('')
    }
}

export default new resultsView()

