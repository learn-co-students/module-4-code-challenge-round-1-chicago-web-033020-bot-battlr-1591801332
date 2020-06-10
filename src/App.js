import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

const URL = "http://localhost:6001/bots"

class App extends Component {
  constructor() {
    super()
    this.state = {
      bots: []
    }
  }

  componentDidMount() {
    fetch(URL, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(resp => resp.json())
    .then(botData => {
      const modBotData = botData.map(bot => {
        return {...bot, isEnlisted: false}
      })
      this.setState({
        bots: modBotData 
      })
    })
  }

  handleAddBot = (id) => {
    const formData = {isEnlisted: true}
    const configData =  {
      method: 'PATCH',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    }

    fetch(`${URL}/${id}`, configData)
    .then(resp => resp.json())
    .then(respData => {
      this.setState(prevState => {
        return {
          bots: prevState.bots.map(bot => bot.id === id ? {...bot, isEnlisted: true} : bot)
        }
      })
    })
  }

  handleDeleteBot = (id) => {
    const configData =  {
      method: 'DELETE',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    fetch(`${URL}/${id}`, configData)
    .then(resp => resp.json())
    .then(respData => {
      this.setState(prevState => {
        return {
          bots: prevState.bots.filter(bot => bot.id !== id)
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} handleAddBot={this.handleAddBot} handleDeleteBot={this.handleDeleteBot}/>
      </div>
    );
  }
}

export default App;
