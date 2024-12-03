import React, { Component } from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'

const API = "http://localhost:6001/bots"

class BotsPage extends Component {
  constructor() {
    super()
    this.state={
      bots: [],
      army: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(botJSON => { 
      this.setState({
        bots: botJSON
      })
    })
  }


  //this function is doing weirdddd things on the backend..erroring out in the console with the delete request but still deleting in the back end? 
  handleDeleteRobot = (robot) => {
    const id = robot.id;
    fetch((API + '/' + id), {method: 'DELETE'})
    const index = this.state.bots.indexOf(robot);
    const array = this.state.bots;
    array.splice(index, 1)
    this.setState({
      bots: array
    })
  }

  toggleAddToArmy = (robot) => {
    if (!this.state.army.includes(robot)) {
      this.setState({
        army: [...this.state.army, robot]
      }) 
    } else if (this.state.army.includes(robot)) {
      const botIndex = this.state.army.indexOf(robot);
      const array = this.state.army;
      array.splice(botIndex, 1);
      this.setState({
        army: array
      })
    }
  }

  render() {
    return (
    <div>
      <YourBotArmy army={this.state.army} toggleAddToArmy={this.toggleAddToArmy} delete={this.handleDeleteRobot}/>
      <BotCollection bots={this.state.bots} toggleAddToArmy={this.toggleAddToArmy} delete={this.handleDeleteRobot}/>
    </div>
    )
  }
}

export default BotsPage;
