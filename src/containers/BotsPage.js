import React, { Component } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state={
      botCollection:[],
      armyCollection:[]
    }
  }

  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(resp => resp.json())
    .then(botArr => {
      const updatedBots = botArr.map (botObj => {
        return {
          ...botObj,
          army: false
        }
      }) 
      
      this.setState({
        botCollection: updatedBots
      })
    })
  }
  
  handleClick = (bot) => {
  //couldn't finsih the logig of this
  if (bot.army === true) {
    return null 
    // let newArr = this.state.botCollection.find( botObj => {
    //   if (botObj.id === bot.id) {
    //     return {
    //       ...botObj,
    //       army: !bot.army
    //     }
    //   }
  } else {
    bot.army = !bot.army
    let newArr = this.state.botCollection.find( botObj => {
      if (botObj.id === bot.id) {
        return {
          ...botObj,
          army: !bot.army
        }
      }
    })
    this.setState({
      armyCollection: [...this.state.armyCollection, newArr]
    })
  }
  }
 

  render() {
    // console.log(this.state.armyCollection)
    return (
    <div>
    <YourBotArmy army={this.state.armyCollection} sendArmy={this.sendArmy}/>
    <BotCollection bots={this.state.botCollection} handleClick={this.handleClick} />
    </div>
    )
  }
}

export default BotsPage;
