import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import BotCollection from './containers/BotCollection'
import YourBotArmy from './containers/YourBotArmy'
import "./App.css";

const getBots = `http://localhost:6001/bots`

class App extends Component {

  constructor() {
    super()
    this.state = {
      bots: [],
      botArmy: []
    }
  }

  componentDidMount() {
    fetch(getBots)
      .then(resp => resp.json())
      .then(botJSON => {
        this.setState({
          bots: botJSON
        })
      })
  }

  handleArmy = (bot) => {
    if (!this.state.botArmy.includes(bot)) {
      this.setState({
        botArmy: [...this.state.botArmy, bot]
      })
      console.log(this.state.botArmy)
    }
  }

  handleDismiss = (bot) => {
      const filteredArmy = this.state.botArmy.filter(botObj => {
        return botObj.id !== bot.id 
      })
            this.setState({
              botArmy: filteredArmy
            })
            console.log(bot)
  }

  render() {
    return (
      <div className="App">
        <BotsPage bots={ this.state.bots } />
        <YourBotArmy botArmy={ this.state.botArmy } handleArmy={ this.handleArmy } handleDismiss={ this.handleDismiss } />
        <BotCollection bots={ this.state.bots } handleArmy={ this.handleArmy } handleDismiss={ this.handleDismiss } />
      </div>
    );
  }
}

export default App;
