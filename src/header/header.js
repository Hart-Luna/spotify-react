import React from "react";
import './Header.css';
import smallLeft from '../assets/icons/small-left.png';
import smallRight from '../assets/icons/small-right.png';
import search from '../assets/icons/search.png';

const Header = () => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="left arrow" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="right arrow" />
                </button>
            </div>
            <div className="header__search">
                <img src={search} alt="Search"/>
                <input 
                    id="search-input" 
                    maxLength="800" 
                    autoCorrect="off" 
                    autoCapitalize="off" 
                    spellCheck="false"
                    placeholder="Listen to anything."
                />
            </div>
            <div className="header__login">
                <button className="subscribe">Subscribe</button>
                <button className="login">Login</button>
            </div>
        </nav>
    )
};

export default Header;