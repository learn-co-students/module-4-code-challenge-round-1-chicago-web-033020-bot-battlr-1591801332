import React, { Component } from "react";
import Bot from '../components/BotCard'

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {
            this.props.bots.map(botObj => {
              return <Bot key={ botObj.id } bot={ botObj } handleArmy={ this.props.handleArmy } handleDismiss={ this.props.handleDismiss } />
            })
          }
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
