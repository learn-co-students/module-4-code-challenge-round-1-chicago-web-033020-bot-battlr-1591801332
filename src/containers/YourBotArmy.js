import React, { Component } from "react";
import BotCard from '../components/BotCard.js'

class YourBotArmy extends Component {

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          {this.props.army.map(armyRobot => <BotCard bot={armyRobot} toggleAddToArmy={this.props.toggleAddToArmy} delete={this.props.delete}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
