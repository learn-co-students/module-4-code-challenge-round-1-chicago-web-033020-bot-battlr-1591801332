import React, { Component } from "react";
import BotCard from '../components/BotCard'
import BotSpecs from '../components/BotSpecs'
class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.botData.map(bot => {
            return <BotCard bot={bot} key={bot.id} handleAddBot={this.props.handleAddBot} handleDelete={this.props.handleDelete} />
          })}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
