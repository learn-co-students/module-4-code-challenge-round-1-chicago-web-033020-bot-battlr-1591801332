import React, { Component } from "react";
import Botcard from "../components/BotCard";
import SortBar from "../components/SortBar"

class BotCollection extends Component {
  renderBotCards = () => {
    return this.props.bots.map((botObj) => (
      <Botcard
        key={botObj.id}
        bot={botObj}
        toggleAddToArmy={this.props.toggleAddToArmy}
        removeBot={this.props.removeBot}
        handleShowView={this.props.handleShowView}
      />
    ));
  };

  render() {
    return (
        <div className="ui four column grid">
          <div className="row">
            <SortBar sortBy={this.props.sortBy} handleSortChange={this.props.handleSortChange} filter={this.props.filter} handleFilterChange={this.props.handleFilterChange}/> 
            {this.renderBotCards()}
          </div>
        </div>
    );
  }
}

export default BotCollection;
