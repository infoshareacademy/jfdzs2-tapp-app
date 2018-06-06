import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/Contacts/contact.js"> Kontakty </Link>
            <Link to="/Dashboard/dashboard.js"> Dashboard </Link>
            <Link to="/Favorites/favorites.js"> Ulubieni </Link>
            <Link to="/Match/match.js"> Dopasowani </Link>
            <Link to="/Settings/settings.js"> Ustawienia </Link>
        </div>
    );
  }
}

export default Menu;
