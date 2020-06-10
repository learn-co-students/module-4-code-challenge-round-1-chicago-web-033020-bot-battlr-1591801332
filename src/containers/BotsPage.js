import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends Component {
  constructor() {
    super();
    this.state = {
      bots: [],
      clicked: null,
    };
  }

  componentDidMount() {
    fetch(`http://localhost:6001/bots`)
      .then((resp) => resp.json())
      .then((json) => {
        const updatedBots = json.map((bot) => ({ ...bot, inArmy: false }));
        this.setState({
          bots: updatedBots,
        });
      });
  }

  handleClick = (botObj, event) => {
    if (event.target.className === "ui mini red button") {
      fetch(`http://localhost:6001/bots/${botObj.id}`, { method: "DELETE" });
      const deletedBots = this.state.bots.filter((bot) => bot.id !== botObj.id);
      this.setState({
        bots: deletedBots,
      });
    } else if (botObj.inArmy === false) {
      this.setState({
        clicked: botObj,
      });
    } else {
      const removedBots = this.state.bots.map((bot) =>
        botObj.id === bot.id ? { ...bot, inArmy: false } : bot
      );
      this.setState({
        bots: removedBots,
      });
    }
  };

  handleEnlist = (botObj) => {
    const addedBots = this.state.bots.map((bot) =>
      botObj.id === bot.id ? { ...bot, inArmy: true } : bot
    );
    this.setState({
      bots: addedBots,
      clicked: null,
    });
  };

  handleGoBack = () => {
    this.setState({
      clicked: null,
    });
  };

  render() {
    const botArmy = this.state.bots.filter((bot) => bot.inArmy === true);
    const otherBots = this.state.bots.filter((bot) => bot.inArmy === false);
    return (
      <div className="test">
        <YourBotArmy bots={botArmy} handleClick={this.handleClick} />
        {this.state.clicked ? (
          <BotSpecs
            bot={this.state.clicked}
            enlist={this.handleEnlist}
            handleGoBack={this.handleGoBack}
          />
        ) : (
          <BotCollection bots={otherBots} handleClick={this.handleClick} />
        )}
      </div>
    );
  }
}

export default BotsPage;
