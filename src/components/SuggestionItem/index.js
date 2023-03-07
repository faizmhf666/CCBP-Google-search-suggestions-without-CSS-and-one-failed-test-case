// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionProp, onArrow} = props
  const {suggestion} = suggestionProp

  const onSelect = () => {
    onArrow(suggestion)
  }

  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onSelect}
      />
    </li>
  )
}

export default SuggestionItem
