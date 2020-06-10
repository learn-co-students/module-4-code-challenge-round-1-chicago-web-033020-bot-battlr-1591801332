import React, { Component } from "react";
import Bot from '../components/BotCard'

class YourBotArmy extends Component {
  //your bot army code here...
  renderYourBots = () => {
    return this.props.yourBots.map(bot => <Bot key={bot.id} bot={bot} removeFromYourBots={this.props.removeFromYourBots} />)
  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderYourBots()}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
