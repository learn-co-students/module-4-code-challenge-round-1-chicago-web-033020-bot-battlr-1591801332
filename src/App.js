import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";

import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state= {
      allBots: [],
      armyBots: [],
      deleteBots: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:6001/bots')
    .then(resp => resp.json())
    .then(data =>{
      this.setState({
        allBots: data
      })
    })
  }

  handleAddToArmy = (bot) => {
    this.setState({
      armyBots: [...this.state.armyBots, bot]
    })
  }

  removeFromArmy = (bot) => {
    console.log(bot)

    this.setState({
      deleteBots: [...this.state.deleteBots, bot]
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <BotsPage allBots={this.state.allBots} armyBots={this.state.armyBots} handleAddToArmy={this.handleAddToArmy} removeFromArmy={this.removeFromArmy}/>
      </div>
    );
  }
}

export default App;
