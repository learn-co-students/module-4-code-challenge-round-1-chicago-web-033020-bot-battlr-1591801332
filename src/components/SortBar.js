import React from 'react';

const SortBar = (props) => {
  return (
    <div className='ui item'>
      <select
        className='ui selection dropdown'
        name='sort'
        onChange={(event) => props.handleSortChange(event)}
        value={props.sortBy}
      >
        <option value='all'>All Bots</option>
        <option value='health'>Health</option>
        <option value='damage'>Damage</option>
        <option value='armor'>Armor</option>
      </select>
      </div>
      // didn't have time to finish filtering by class
      // <select
      // className='ui selection dropdown'
      // name='filter'
      // onChange={(event) => props.handleFilterChange(event)}
      // value={props.filterBy}
      // >
      //   <option value='all'>All Bots</option>
      //   <option value='support'>Support</option>
      //   <option value='medic'>Medic</option>
      //   <option value='assault'>Assault</option>
      //   <option value='defender'>Defender</option>
      //   <option value='captain'>Captain</option>
      //   <option value='witch'>Witch</option>
      // </select>
  );
};

export default SortBar;
