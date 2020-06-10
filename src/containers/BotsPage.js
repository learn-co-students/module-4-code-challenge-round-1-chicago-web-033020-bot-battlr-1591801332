import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";


class BotsPage extends Component {
  //start here with your code for step one

  render() {
    console.log(this.props.armyBots)
    return <div>
      < YourBotArmy armyBots={this.props.armyBots} removeFromArmy={this.props.removeFromArmy} handleAddToArmy={this.props.handleAddToArmy}/>
      < BotCollection allBots={this.props.allBots} handleAddToArmy={this.props.handleAddToArmy} />

      
      </div>;
  }
}

export default BotsPage;
