import React, { Component } from "react";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends Component {
  //your code here
  renderBot = () => {
    return this.props.allBots.map(bot => {
      return <div>
        <BotSpecs bot={bot} enlistBot={this.props.enlistBot}/> 
        </div>
    })}

  
  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          
          {this.renderBot()}
          
        </div>
      </div>
    );
  }
}

export default BotCollection;
