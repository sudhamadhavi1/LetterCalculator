import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {textcount: ''}

  textCountChange = event => {
    this.setState({textcount: event.target.value})
  }

  render() {
    const {textcount} = this.state

    return (
      <div className="app-Container">
        <div>
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="myinput">Enter the phrase</label>
          <input
            id="myinput"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.textCountChange}
          />
          <div className="letters-container">
            <p>No.of letters: {textcount.length}</p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
