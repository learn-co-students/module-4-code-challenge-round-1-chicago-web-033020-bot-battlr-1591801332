import React, { Component } from "react";
import BotCard from '../components/BotCard'



class YourBotArmy extends Component {
  //your bot army code here...
  renderBot = () => {
    return this.props.enlistedBots.map(bot => {
      return <div>
        <BotCard bot={bot} key={bot.id} releaseBot={this.props.releaseBot} deleteBot={this.props.deleteBot}/>
       
      </div>
    })}

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBot()}

          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
