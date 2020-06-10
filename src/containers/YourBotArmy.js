import React, { Component } from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends Component {
  renderMyArmy = () => {
    return this.props.bots.map((botObj) => (
      <BotCard
        key={botObj.id}
        bot={botObj}
        toggleAddToArmy={this.props.toggleAddToArmy}
        removeBot={this.props.removeBot}
      />
    ));
  };

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderMyArmy()}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
