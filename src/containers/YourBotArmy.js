import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  
  renderBots = () => {
    return this.props.myArmy.map(bot => {
      return <BotCard key={bot.id} bot={bot} editMyArmy={this.props.editMyArmy} destroyBot={this.props.destroyBot} />
      
    })
  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
