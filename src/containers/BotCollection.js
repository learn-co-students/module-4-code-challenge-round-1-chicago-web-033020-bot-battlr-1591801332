import React, { Component } from "react";
import Botcard from "../components/BotCard";

class BotCollection extends Component {
  renderBotCards = () => {
    return this.props.bots.map((botObj) => (
      <Botcard
        key={botObj.id}
        bot={botObj}
        toggleAddToArmy={this.props.toggleAddToArmy}
        removeBot={this.props.removeBot}
      />
    ));
  };

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderBotCards()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
