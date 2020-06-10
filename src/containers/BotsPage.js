import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends Component {
  //start here with your code for step one
  constructor() {
    super()

    this.state ={
      bots: [],
      yourBots: [],
      showBotSpecs: false
    }
  }

  componentDidMount() {
    const botsURL = 'http://localhost:6001/bots'

    fetch(botsURL)
      .then(resp => resp.json())
      .then(bots => {
        this.setState({
          bots: bots
        })
      })
  }

  addToYourBots = (bot) => {
    if (!this.state.yourBots.includes(bot)) {
      this.setState({
        yourBots: [
          ...this.state.yourBots,
          bot
        ]
      })
    }
  }

  removeFromYourBots = (botId) => {
    let newYourBotsArr = this.state.yourBots.filter(bot => bot.id !== botId)
    
    this.setState({
      yourBots: newYourBotsArr
    })
  }

  deleteBot = (botId) => {
    let newBotsArr = this.state.bots.filter(bot => bot.id !== botId)

    const deleteBotURL = `http://localhost:6001/bots/${botId}`
    const configObj = {
      method: 'DELETE'
    }

    fetch(deleteBotURL, configObj)
      .then(resp => resp.json())
      .then(bot => {
        this.setState({
          bots: newBotsArr
        })
      })

    this.removeFromYourBots(botId)
  }

  render() {
    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots} removeFromYourBots={this.removeFromYourBots} />
        <BotCollection bots={this.state.bots} addToYourBots={this.addToYourBots} deleteBot={this.deleteBot} />}
      </div>
    )
  }
}

export default BotsPage;
