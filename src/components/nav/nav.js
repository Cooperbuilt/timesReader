import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './nav.css';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar__headline">
          <h2>The Times</h2>
            <input
              className="navbar__headline__search"
              type='text' placeholder='Search...'
              id='search-text-input'
              onKeyUp={(e) => {this.props.update(e, e.target.value)}}
            />
        </div>
        <div className="navbar__links">
          <NavLink
            exact to="/"
            className="navbar__links--unselected"
            activeClassName="navbar__links--selected"
          >
            Home
          </NavLink>
          <NavLink
            to="/world"
            className="navbar__links--unselected"
            activeClassName="navbar__links--selected"
          >
            World
          </NavLink>
          <NavLink
            to="/us"
            className="navbar__links--unselected"
            activeClassName="navbar__links--selected"
          >
            U.S.
          </NavLink>
          <NavLink
            to="/politics"
            className="navbar__links--unselected"
            activeClassName="navbar__links--selected"
          >
            Politics
          </NavLink>
          <NavLink
            to="/science"
            className="navbar__links--unselected"
            activeClassName="navbar__links--selected"
          >
            Science
          </NavLink>
          <NavLink
            to="/sports"
            className="navbar__links--unselected"
            activeClassName="navbar__links--selected"
          >
            Sports
          </NavLink>
        </div>
      </nav>
    );
  }
}
