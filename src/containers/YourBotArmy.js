import React, { Component } from "react";
import Bot from '../components/BotCard'

class YourBotArmy extends Component {
  //your bot army code here...

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {
              this.props.botArmy.map(botObj => {
                return <Bot key={ botObj.id } bot={ botObj } handleArmy={ this.props.handleArmy } handleDismiss={ this.props.handleDismiss } />
              })
            }
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
