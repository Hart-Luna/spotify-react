import React from "react";
import './Header.css';
import smallLeft from '../assets/icons/small-left.png';
import smallRight from '../assets/icons/small-right.png';
import search from '../assets/icons/search.png';

const Header = () = {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="arrow-left">
                    </></button>
                <button className="arrow-right">
                    <img src={smallRight} alt="arrow-right">
                    </></button>
            </div>
            <div classNameName="header__search">
                <img src={search} alt="search">
                    <input id="search-input" type="text" maxlength="800" placeholder="Listen to something new.">
                    </div>
                    <div className="header__login">
                        <button className="subscribe">Subscribe</button>
                        <button className="login">Login</button>
                    </div>
                </nav>

                );
}

export default Header;