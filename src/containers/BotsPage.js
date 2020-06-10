import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  //start here with your code for step one

  constructor() {
    super()
    this.state = {
      botData: [],
      botArmyData: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:6001/bots')
    .then(resp => resp.json())
    .then(botDataJson => {
      this.setState({
        botData: botDataJson
      })
    })
  }

  handleAddBot = bot => {
    if (this.state.botArmyData.includes(bot)) {
      console.log("hi")
      const newArmy = this.state.botArmyData.filter(b => b !== bot)
      this.setState({
        botArmyData: newArmy
      })
        // const index = this.state.botArmyData.indexOf(bot)
        // this.state.botArmyData.splice(index, 1)
    } else { 
      this.setState(prevState => {
      return {
        botArmyData:[...prevState.botArmyData, bot]
      }
    })
  }
  }

  handleDelete = bot => {
    fetch(`http://localhost:6001/bots/${bot.id}`, {
      method: 'DELETE'
    })
    const newArmy = this.state.botArmyData.filter(b => b !== bot)
    const collection = this.state.botData.filter(b => b !== bot)
    this.setState({
      botData: collection,
      botArmyData: newArmy
    })
    }

  render() { console.log(this.state.botArmyData,"army bot data")
    return <div>
      <YourBotArmy armyBots={this.state.botArmyData} handleAddBot={this.handleAddBot} handleDelete={this.handleDelete} />
      <BotCollection botData={this.state.botData} handleAddBot={this.handleAddBot} handleDelete={this.handleDelete} /></div>;
  }
}

export default BotsPage;
