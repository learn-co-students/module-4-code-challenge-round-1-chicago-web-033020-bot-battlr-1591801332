import React, { Component } from "react";
import BotCard from '../components/BotCard.js'

class BotCollection extends Component {

  render(props) {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(robot => <BotCard bot={robot} toggleAddToArmy={this.props.toggleAddToArmy} delete={this.props.delete}/>)}
        </div>
      </div>
    );
  }
}

export default BotCollection;
