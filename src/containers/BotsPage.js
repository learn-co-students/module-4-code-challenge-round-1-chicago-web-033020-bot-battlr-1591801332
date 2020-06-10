import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends Component {
  //start here with your code for step one
  constructor() {
    super();
    this.state = {
      bots: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:6001/bots")
      .then((resp) => resp.json())
      .then((bots) => {
        const modifiedBots = bots.map((bot) => ({ ...bot, army: false }));
        this.setState({ bots: modifiedBots });
      });
  }

  myBots = () => {
    return this.state.bots.filter((bot) => bot.army === true);
  };

  toggleAddToArmy = (bot) => {
    const updatedBots = this.state.bots.map((botObj) => {
      return botObj.id === bot.id ? { ...botObj, army: !botObj.army } : botObj;
    });
    this.setState({
      bots: updatedBots,
    });
  };

  removeBot = (bot) => {
    const updatedBots = this.state.bots.filter(
      (botObj) => botObj.id !== bot.id
    );

    const formObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bot),
    };

    fetch(`http://localhost:6001/bots/${bot.id}`, formObj)
      .then((resp) => resp.json())
      .then((bot) => {
        this.setState({
          bots: updatedBots,
        });
      });
  };

  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.myBots()}
          toggleAddToArmy={this.toggleAddToArmy}
          removeBot={this.removeBot}
        />

        <BotCollection
          bots={this.state.bots}
          toggleAddToArmy={this.toggleAddToArmy}
          removeBot={this.removeBot}
        />
      </div>
    );
  }
}

export default BotsPage;
