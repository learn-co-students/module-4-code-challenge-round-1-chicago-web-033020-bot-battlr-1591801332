import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";

const API = 'http://localhost:6001/bots'

class BotsPage extends Component {
  //start here with your code for step one
  state = {
    transformers: [],
    myArmy: []
  }

  componentDidMount() {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        transformers: data
      })
    })
  }

  handleClick = (transformer) => {
    // console.log(event.target)

    if(this.state.myArmy.find(bot => bot.id === transformer.id)) {
      console.log("test")
    } else {
      this.setState({
        myArmy : [...this.state.myArmy, transformer]
      })
    }
  }

  handleDeleteClick = (transformer) => {
    console.log(transformer)
    this.setState({
      myArmy: this.state.myArmy.filter(bot => bot.id !== transformer.id)
    })
  }

  render() {
    console.log(this.state.myArmy.length)
    return <div>
      <YourBotArmy myArmy={this.state.myArmy} handleDelete={this.handleDeleteClick}/>
      <BotCollection transformers={this.state.transformers} handleClick={this.handleClick}/>
    </div>;
  }
}

export default BotsPage;
