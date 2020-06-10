import React, { Component } from "react";
import BotsPage from "./BotsPage";
import BotCard from "../components/BotCard"

class YourBotArmy extends Component {
  renderArmy = () => {
   return this.props.army.map(armyObj => {
     return <BotCard bot={armyObj}/>
   })
  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderArmy()}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
