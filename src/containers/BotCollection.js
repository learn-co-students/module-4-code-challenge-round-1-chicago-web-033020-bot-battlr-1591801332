import React, { Component } from "react";
import Bot from '../components/BotCard'

class BotCollection extends Component {
  // addToYourBots={this.props.addToYourBots}
  //your code here
  renderBots = () => {
    return this.props.bots.map(bot => <Bot key={bot.id} bot={bot} deleteBot={this.props.deleteBot} addToYourBots={this.props.addToYourBots} />)
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderBots()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
