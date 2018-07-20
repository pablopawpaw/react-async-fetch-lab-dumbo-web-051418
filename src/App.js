// create your App component here
import React from 'react'

import Greeting from './components/Greeting'
import ExampleComponent from './components/ExampleComponent'
import Button from './components/Button'


export default class App extends React.Component {

  state = {
    people: []
  }

  baseUrl = "http://api.open-notify.org/astros.json"

  render() {
    return (
      <div className="App">
        <Greeting />
        <ExampleComponent />
        <Button />
      </div>
    )
  }

  componentDidMount() {
    fetch(this.baseUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          people: data["people"]
        }, ()=>console.log(this.state.people))
      })
  }

}
