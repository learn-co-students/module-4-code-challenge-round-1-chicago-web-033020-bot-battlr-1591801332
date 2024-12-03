import React, { Component } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import SortBar from '../components/SortBar'

class BotsPage extends Component {
  constructor() {
    super();
    this.state = {
      bots: [],
      myArmy: [],
      sortBy: '',
      filterBy: ''
    };
  }

  componentDidMount() {
    fetch('http://localhost:6001/bots')
      .then((resp) => resp.json())
      .then((bots) => {
        this.setState({
          bots: bots,
        });
      });
  }

  editMyArmy = (bot) => {
    const { myArmy } = this.state;

    if (!myArmy.includes(bot)) {
      // advanced deliverable below
      const botIndex = this.state.bots.indexOf(bot);
      const array = this.state.bots;
      array.splice(botIndex, 1);
      // advanced deliverable above
      this.setState((prevState) => ({
        bots: array,
        myArmy: [...prevState.myArmy, bot],
      }));
    } else if (myArmy.includes(bot)) {
      const botIndex = myArmy.indexOf(bot);
      const array = myArmy;
      array.splice(botIndex, 1);
      this.setState((prevState) => ({
        myArmy: array,
        bots: [...prevState.bots, bot]
      }));
    }
  };

  destroyBot = (bot) => {
    const id = bot.id
    const objReq = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bot)
    }

    fetch(`http://localhost:6001/bots/${id}`, objReq)
    .then(resp => resp.json())
    .then(data => {
      const botIndex = this.state.bots.indexOf(bot);
      const array = this.state.bots;
      array.splice(botIndex, 1);
      this.setState((prevState) => ({
        bots: array,
        myArmy: prevState.myArmy
      }));
    })
  }

  handleSortChange = (event) => {
    this.setState({
      sortBy: event.target.value
    })
  }

  sortBots = () => {
    const { bots, sortBy } = this.state
    // const bots = this.filterBots()

    switch (sortBy) {
      case 'health':
        return bots.sort((firstBot, secondBot) => firstBot.health - secondBot.health)
      case 'damage':
        return bots.sort((firstBot, secondBot) => firstBot.damage - secondBot.damage)
      case 'armor':
        return bots.sort((firstBot, secondBot) => firstBot.armor - secondBot.armor)
      case 'all':
        return bots
      default:
        return bots
    }
  }

  // didn't have time to finish filtering by class
  // handleFilterChange = (event) => {
  //   this.setState({
  //     filterBy: event.target.value
  //   })
  // }

  // filterBots = () => {
  //   const { bots, filterBy } = this.state
    
  //   switch (filterBy) {
  //     case 'support':
  //       return bots.filter(bot => {bot.bot_class === 'Support'})
  //     case 'medic':
  //       return
  //     case 'assault':
  //       return
  //     case 'defender':
  //       return
  //     case 'captain':
  //       return
  //     case 'witch':
  //       return
  //     case 'all':
  //       return bots
  //     default:
  //       return bots
  //   }
  // }

  render() {
    const { myArmy, sortBy } = this.state;
    return (
      <div>
        <YourBotArmy myArmy={myArmy} editMyArmy={this.editMyArmy} destroyBot={this.destroyBot} />
        <SortBar handleSortChange={this.handleSortChange} sortBy={sortBy} /> {/*handleFilterChange={this.handleFilterChange}  filterBy={filterBy} */}
        <BotCollection bots={this.sortBots()} editMyArmy={this.editMyArmy} destroyBot={this.destroyBot} />
      </div>
    );
  }
}

export default BotsPage;
