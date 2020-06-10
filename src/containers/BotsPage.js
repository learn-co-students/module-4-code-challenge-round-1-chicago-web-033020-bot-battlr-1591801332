import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends Component {
  constructor() {
    super();
    this.state = {
      bots: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:6001/bots`)
      .then((resp) => resp.json())
      .then((json) => {
        const updatedBots = json.map(bot => ({...bot, inArmy: false}))
        this.setState({
          bots: updatedBots,
        });
      });
  }

  handleClick = (botObj, event) => {
    if (event.target.className === "ui mini red button"){
      fetch(`http://localhost:6001/bots/${botObj.id}`, { method: 'DELETE' })
        const deletedBots = this.state.bots.filter(bot => bot.id !== botObj.id )
        this.setState({
          bots: deletedBots
        })
    } else if (botObj.inArmy === true) {
      const removedBots = this.state.bots.map(bot => botObj.id === bot.id ? ({...bot, inArmy: false}) : bot )
      this.setState({
        bots: removedBots
      })
    } else {
      const addedBots = this.state.bots.map(bot => botObj.id === bot.id ? ({...bot, inArmy: true}) : bot )
      this.setState({
          bots: addedBots
      })
    }
  }

  render() {
    const botArmy = this.state.bots.filter(bot => bot.inArmy === true)
    return (
      <div className="test">
        <YourBotArmy bots={botArmy} handleClick={this.handleClick}/>
        <BotCollection bots={this.state.bots} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default BotsPage;
