import React, { Component } from "react";
import BotCard from '../components/BotCard'

export default class BotCollection extends Component {

  renderBots = () => {
    return this.props.bots.map(bot => <BotCard bot={bot} key={bot.id} handleDeleteBot={this.props.handleDeleteBot} handleAddBot={this.props.handleAddBot}/>)
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderBots()}
        </div>
      </div>
    );
  }
}