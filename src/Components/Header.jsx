import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className="logo__container">
            <div className="logo"></div>
        </div>
        <div className="icons__container">
           <Link to="/"><div className="home icon"></div></Link>
           <Link to="/resume"><div className="file icon"></div></Link>
           <Link to="/trainee"><div className="message icon"></div></Link>
           <Link to="/profile"><div className="profile icon"></div></Link>
        </div>
        
    </header>
  )
}

export default Header
