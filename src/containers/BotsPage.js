import React, { Component } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const botsUrl = 'http://localhost:6001/bots'

class BotsPage extends Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
      bots: [],
      botArmy: []
    }
  }

  componentDidMount() {
    fetch(botsUrl)
      .then(response => response.json())
      .then(bots => {
        const updatedBots = bots.map(bot => {
          return {
            ...bot,
            botArmy: false
          }
        })

        this.setState({
          bots: updatedBots
        })
      })
  }

  enlistBotArmy = (id) => {
    const enlistingBot = this.state.bots.find(bot => bot.id === id)
    if (this.state.botArmy.includes(enlistingBot) === false) {
      this.setState({
        botArmy: [
          ...this.state.botArmy,
          enlistingBot
        ]
      })
    }
  }

  removeArmyCard = (id) => {
    const botArmy = this.state.botArmy
    const delistingBot = botArmy.find(bot => bot.id === id)
    const index = botArmy.indexOf(delistingBot)
    
    this.state.botArmy.splice(index, 1)
    
    this.setState({
      botArmy: this.state.botArmy
    })
  }

  deleteBot = (id) => {
    const removedBot = this.state.bots.find(bot => bot.id === id)
    
    const reqObj = {
      method: 'DELETE',
    }

    fetch(`${botsUrl}/${removedBot.id}`, reqObj)

    const updatedBots = this.state.bots.filter(bot => bot !== removedBot)
    const updatedBotArmy = this.state.botArmy.filter(armyBot => armyBot !== removedBot)
    
    this.setState({
      bots: updatedBots,
      botArmy: updatedBotArmy
    })
     
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} handleClick={this.removeArmyCard} deleteBot={this.deleteBot} />
        <BotCollection bots={this.state.bots} handleClick={this.enlistBotArmy} deleteBot={this.deleteBot} />
      </div>
    )
  }
}

export default BotsPage;
