import React, { Component } from "react";

class SortBar extends Component {
  render() {
    return (
      <div>
        <h1>Sort By: </h1>
        <select value={this.props.sortBy} onChange={this.props.handleSortChange}>
          <option value=""></option>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>

        {/* LAST WORKED, DIDN'T COMPLETE */}
        <h1>Filter By: </h1>
        <label>Support<input type="checkbox" checked={null}/></label>
        <br/>
        <label>Medic<input type="checkbox" checked={null}/></label>
        <br/>
        <label>Assault<input type="checkbox" checked={null}/></label>
        <br/>
        <label>Defender<input type="checkbox" checked={null}/></label>
        <br/>
        <label>Captain<input type="checkbox" checked={null}/></label>
        <br/>
        <label>Witch<input type="checkbox" checked={null}/></label>

        {/* <select value={this.props.filterBy} onChange={this.props.handleFilterChange}>
          <option value=""></option>
          <option value="support">Support</option>
          <option value="medic">Medic</option>
          <option value="assault">Assault</option>
          <option value="defender">Defender</option>
          <option value="captain">Captain</option>
          <option value="witch">Witch</option>
        </select> */}
      </div>
    );
  }
}

export default SortBar;
