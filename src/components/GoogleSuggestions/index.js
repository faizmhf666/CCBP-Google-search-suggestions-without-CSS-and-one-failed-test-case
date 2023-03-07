import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onArrow = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div>
          <button type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search"
              alt="search icon"
            />
          </button>
          <input type="search" onChange={this.onInput} value={searchInput} />
          <ul className="list-item-container">
            {searchResult.map(each => (
              <SuggestionItem
                suggestionProp={each}
                key={each.id}
                onClick={this.onArrow}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
