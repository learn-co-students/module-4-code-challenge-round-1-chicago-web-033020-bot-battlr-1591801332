import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.transformers.map(transformer => {
            return <BotCard bot={transformer} handleClick={this.props.handleClick}/>
          })}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
