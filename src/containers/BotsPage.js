import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {

  render() {
    const allBots = this.props.bots
    const yourBots = this.props.bots.filter(bot => bot.isEnlisted)

    return (
    <div>
      <YourBotArmy bots={yourBots} handleDeleteBot={this.props.handleDeleteBot} handleAddBot={this.props.handleAddBot}/>
      <BotCollection bots={allBots} handleDeleteBot={this.props.handleDeleteBot} handleAddBot={this.props.handleAddBot}/>
    </div>
    )
  }
}

export default BotsPage;
