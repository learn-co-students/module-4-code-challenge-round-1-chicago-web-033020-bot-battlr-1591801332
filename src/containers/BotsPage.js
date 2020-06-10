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
  
  handleClick = (bot, event) => {
  //couldn't finsih the logig of this
  
  // if (event.target !==)
  if (bot.army === true) {
    bot.army = !bot.army 
    let newArray = this.state.armyCollection.filter( botObj => {
        if (botObj.id !== bot.id) {
            return {
                botObj
              }
            }
          }
          ) 
              this.setState({
                  armyCollection: newArray
                })
                    
   } else {
    bot.army = !bot.army
    let newArr = this.state.botCollection.find( botObj => {
      if (botObj.id === bot.id) {
        return {
          ...botObj
        }
      }
    })
    this.setState({
      armyCollection: [...this.state.armyCollection, newArr]
    })
  }
  }
 

  handleDelete = (bot) => {
    let newArr = this.state.botCollection.filter( botObj => {
      if (botObj.id !== bot.id) {
          return {
              botObj
            }
          }
        }
        ) 
          this.setState({
              botCollection: newArr
            })
                  
   
  }

  render() {
    // console.log(this.state.armyCollection)
    return (
    <div>
    <YourBotArmy army={this.state.armyCollection} handleClick={this.handleClick}/>
    <BotCollection bots={this.state.botCollection} handleClick={this.handleClick} handleDelete={this.handleDelete} />
    </div>
    )
  }
}

export default BotsPage;
