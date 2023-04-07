// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {word: ''}

  getLetters = event => {
    this.setState({word: event.target.value})
  }

  render() {
    const {word} = this.state
    console.log(word.length)
    return (
      <div className="app-container">
        <div className="letter-calculator-container">
          <div className="letter-calculator">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="letter">Enter the phrase</label>
            <input
              onChange={this.getLetters}
              placeholder="Enter the phrase"
              id="letter"
              type="text"
              className="text-input"
            />
            <p type="button" className="letter-btn">
              No.of letters: {word.length}
            </p>
          </div>
          <div>
            <img
              className="calculator-image"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
