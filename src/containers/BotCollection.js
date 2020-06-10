import React, { Component } from "react";
import BotCard from "../components/BotCard"

class BotCollection extends Component {
  //your code here

  render() {
    // console.log(this.props.allBots)
    return (
      <div className="ui four column grid">
        <div className="row" >
          {
           this.props.allBots.map(botObj => {
             return <BotCard bot={botObj} key={botObj.id} handleAddToArmy={this.props.handleAddToArmy}/>
           })
          }
        </div>
      </div>
    );
  }
}

export default BotCollection;
