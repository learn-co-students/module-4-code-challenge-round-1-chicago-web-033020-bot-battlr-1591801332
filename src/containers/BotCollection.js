import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  
  renderBots = () => {
    return this.props.bots.map(bot => {
      return <BotCard key={bot.id} bot={bot} editMyArmy={this.props.editMyArmy} destroyBot={this.props.destroyBot} />
      
    })
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderBots()}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
