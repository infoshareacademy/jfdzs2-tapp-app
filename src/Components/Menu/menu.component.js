import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login"> ZALOGUJ || ZAREJESTRUJ </Link>
            <Link to="/contact"> Kontakty </Link>
            <Link to="/dashboard"> Dashboard </Link>
            <Link to="/favorites"> Ulubieni </Link>
            <Link to="/match"> Dopasowani </Link>
            <Link to="/settings"> Ustawienia </Link>
        </div>
    );
  }
}

export default Menu;
