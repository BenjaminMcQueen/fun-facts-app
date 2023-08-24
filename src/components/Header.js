import { NavLink } from 'react-router-dom';
import React from 'react';
import headerBanner from './gw2-banner-3.png';
import './css/HeaderFooter.css';
import './css/text-outlines.css';

const Header = (props) => {
    return (
        <div className='Header'>
            <NavLink to="/">
                <div className='Header-banner'>
                    <img src={headerBanner} alt="GW2 banner" />
                </div>
            </NavLink>

            <div className='Fact-buttons'>
                <NavLink to="/factone"><button className='btn1 Text-outline-w-d'>fact page 1</button></NavLink>
                <NavLink to="/facttwo"><button className='btn2 Text-outline-w-d'>fact page 2</button></NavLink>
                <NavLink to="/factthree"><button className='btn3 Text-outline-w-d'>fact page 3</button></NavLink>
            </div>
        </div>
    );
};

export default Header;