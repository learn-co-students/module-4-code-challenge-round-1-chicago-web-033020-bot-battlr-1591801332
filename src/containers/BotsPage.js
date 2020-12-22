import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const GETAPI = "http://localhost:6001/bots"
const DELURL = "http://localhost:6001/bots/"
class BotsPage extends Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
      bots: []
    }
  }
  
  componentDidMount() {
    fetch(GETAPI)
    .then(resp => resp.json())
    .then(bots => {
      const newBots = bots.map(bot => {
        return {...bot, enlisted: false}
      })
      this.setState({
        bots: newBots
      })
      
    }
    )
  }
  enlistBot = (id) => {
    let bList = this.state.bots.map(bot => {
      if (bot.id === id){
          return {...bot, enlisted: true}
      } else {
          return bot
      }
    })
    this.setState({
      bots: bList
    })
  }

  releaseBot = (id) => {
    let bList = this.state.bots.map(bot => {
      if (bot.id === id){
          return {...bot, enlisted: false}
      } else {
          return bot
      }
    })
    this.setState({
      bots: bList
    })
  }

  removeBot = (id) => {
    return this.state.bots.filter(bot => bot.id !== id)
  } 

  deleteBot = (id) => {
  const dURL = DELURL + id
    fetch(dURL, {method: 'delete'})
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        bots: this.removeBot(id)
      })
    })
  }

  render() {
    const enlistedBots = this.state.bots.filter(bot => bot.enlisted)
    return <div>
      <YourBotArmy enlistedBots={enlistedBots} releaseBot={this.releaseBot} deleteBot={this.deleteBot}/>
      <BotCollection allBots={this.state.bots} enlistBot={this.enlistBot} />
      </div>;
  }
}

export default BotsPage;
