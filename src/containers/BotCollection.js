import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  
  //your code here

  renderBot = () => {
    return this.props.bots.map(botObj => {
     return <BotCard bot={botObj}  handleClick={this.props.handleClick}/>
    })
  }



  render() {

    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderBot()}
          Collection of all bots
          <botCard />
        </div>
      </div>
    );
  }
}

export default BotCollection;
