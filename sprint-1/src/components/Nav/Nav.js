import React, { Component } from 'react';
import Logo from "./Logo-brainflix.svg";
import UserImage from './Mohan-muruge.jpg'
import './Nav.scss'

class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="Nav__logo-container">
                    <img src={Logo} alt="" className="Nav__logo"/>
                </div>
                <div className="Nav__search-container">
                    <input type="text" className="Nav__search-input" placeholder="Search"/>
                </div>
                <div className="Nav__upload-container">
                    <button className="Nav__upload-btn"> <span>+</span> upload</button>
                    <img src={UserImage} alt="" className="Nav__user-image"/>
                </div>

            </div>
        );
    }
}

export default Nav;