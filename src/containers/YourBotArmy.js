import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  renderYourBots = () => {
    this.props.bots.map(bot => <BotCard bot={bot} handleDeleteBot={this.props.handleDeleteBot} handleAddBot={this.props.handleAddBot}/>)
  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderYourBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
