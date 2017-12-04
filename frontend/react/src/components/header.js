import React from 'react';
import { Link } from 'react-router-dom'
import './header.css'
import dogHome from '../images/dog-home.png'

const Header = () => (
    <div className="App-header">
      <div className="nav-home">
        <Link to="/"><div className="home-logo"></div></Link>
      </div>
      <div className="nav-menu">
        <Link to="/therapy">Therapy</Link>
        <Link to="/map">Map</Link>
      </div>
    </div>
)

export default Header;
