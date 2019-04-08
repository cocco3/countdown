import React, { Component } from 'react'
import './App.css'

import CountList from './components/CountList'
import Header from './components/Header'

const testData = [
  { name: 'Kevin and Leigh Visit', date: Date.now() + 9036600},
  { name: 'Australia', date: Date.now() - 1342234036600}
]

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <CountList events={testData} />
      </div>
    )
  }
}

export default App;
