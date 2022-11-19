import {Component} from 'react'
import {v4} from 'uuid'
import ResultView from './components/ResultView'
import './App.css'

class App extends Component {
  state = {searchInput: '', resultList: []}

  onClickAddButton = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const newList = {
      id: v4(),
      userText: searchInput,
      count: searchInput.length,
    }
    this.setState(prevState => ({
      resultList: [...prevState.resultList, newList],
      searchInput: '',
    }))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderResult = () => {
    const {resultList} = this.state
    return resultList.length === 0 ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
        className="image"
      />
    ) : (
      resultList.map(eachItem => (
        <ResultView itemDetails={eachItem} key={eachItem.id} />
      ))
    )
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="yellow-container">
            <div className="yellow-top">
              <h1 className="yellow-heading">
                Count the characters like a Boss...
              </h1>
            </div>
            <div className="yellow-bottom">
              <ul>{this.renderResult()}</ul>
            </div>
          </div>
          <div className="blue-container">
            <h1 className="blue-heading">Character Counter</h1>
            <div className="input-container">
              <form onSubmit={this.onClickAddButton}>
                <input
                  className="input"
                  type="text"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                  placeholder="Enter the Characters here"
                />
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App
