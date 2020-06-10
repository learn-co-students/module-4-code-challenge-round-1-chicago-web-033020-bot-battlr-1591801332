import React, { Component } from "react";
import BotArmyCard from "../components/BotArmyCard"
// import BotSpecs from "../components/BotSpecs"

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    console.log(this.props.armyBots)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            { 
           this.props.armyBots.map(botObj => {
            return <BotArmyCard bot={botObj} key={botObj.id} removeFromArmy={this.props.removeFromArmy} />
          })
           }
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
