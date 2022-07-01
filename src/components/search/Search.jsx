import React from 'react';
import './search.css';
import logo from '../../img/logo.png';
import { UilSearch } from '@iconscout/react-unicons';

const Search = () => {
  return (
    <div className="logo-search">
      <img src={logo} alt="" />
      <div className="search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
