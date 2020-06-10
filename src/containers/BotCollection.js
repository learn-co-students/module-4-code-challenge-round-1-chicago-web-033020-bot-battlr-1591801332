import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  //your code here
  componentDidMount(){
    fetch('http://localhost:6001')
      .then(res => res.json())
      .then(data => console.log(data))
  }

  // I'm not ready for this assessment, I still don't understand anything.
  // I know that to start this test, I need to get botcollection to render a card for every item in the api, 
  // but I can't remember quite how to do it and my fetch request to log out the data breaks in a way that doesn't make sense to me.

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">

          {/*...and here..*/}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
