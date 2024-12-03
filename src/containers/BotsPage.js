import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends Component {
  //start here with your code for step one
  constructor() {
    super();
    this.state = {
      bots: [],
      showView: false,
      showBot: {},
      sortBy: ""
      // filter: ""
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

  handleShowView = (bot) => {
    this.setState({
      showView: true,
      showBot: bot,
    });
  };

  handleShowAll = () => {
    this.setState({
      showView: false,
      showBot: {},
    });
  };

  handleSortChange = (event) => {
    this.setState({
      sortBy: event.target.value
    })
  }

  handleFilterChange = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  sortBots = () => {
    const sortedBots = this.state.bots.filter(bot=> bot.army=== false)
    switch (this.state.sortBy) {
      case "health":
        return sortedBots.sort((bot1,bot2)=> bot2.health-bot1.health)
      case "damage":
        return sortedBots.sort((bot1,bot2)=> bot2.damage-bot1.damage)
      case "armor":
        return sortedBots.sort((bot1,bot2)=> bot2.armor-bot1.armor)
      default: 
        return sortedBots
    }
  }

  // LAST WORKED: 
  // sort is functional
  // filter code is in progress, first wrote it out as a dropdown, and then working to checkboxes to allow
  // user to select multiple filters
  // filterBots = () => {
  //   const filteredBots = this.state.bots.filter(bot=> bot.army=== false)
  //   switch (this.state.filter) {
  //     case "support":
  //       return filteredBots.filter(bot=> bot.bot_class === "support")
  //     case "medic":
  //       return filteredBots.filter(bot=> bot.bot_class === "medic")
  //     case "assault":
  //       return filteredBots.filter(bot=> bot.bot_class === "assault")
  //     case "defender":
  //       return filteredBots.filter(bot=> bot.bot_class === "defender")
  //     case "captain":
  //       return filteredBots.filter(bot=> bot.bot_class === "captain")
  //     case "witch":
  //       return filteredBots.filter(bot=> bot.bot_class === "witch")
  //     default:
  //       return filteredBots
  //   }
  // }

  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.myBots()}
          toggleAddToArmy={this.toggleAddToArmy}
          removeBot={this.removeBot}
        />
        {this.state.showView ? (
          <BotSpecs
            bot={this.state.showBot}
            toggleAddToArmy={this.toggleAddToArmy}
            handleShowAll={this.handleShowAll}
          />
        ) : (
          <BotCollection
            bots={this.sortBots()}
            toggleAddToArmy={this.toggleAddToArmy}
            removeBot={this.removeBot}
            handleShowView={this.handleShowView}
            handleSortChange={this.handleSortChange}
            handleFilterChange={this.handleFilterChange}
            sortBy={this.state.sortBy}
            filter={this.state.filter}
          />
        )}
      </div>
    );
  }
}

export default BotsPage;
