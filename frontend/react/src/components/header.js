import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => (
    <div className="App-header">
      <div className="nav-home">
        <Link to="/"><div className="home-logo"></div></Link>
      </div>
      <div className="nav-menu">
        <Link to="/therapy">Therapy</Link>
        <a href="https://austintexas.gov/">Exit</a>
      </div>
    </div>
)

export default Header;
