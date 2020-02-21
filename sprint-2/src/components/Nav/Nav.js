import React, { Component } from 'react';
import Logo from "./Logo-brainflix.svg";
import UserImage from './Mohan-muruge.jpg';
import SearchIcon from './Icon-search.svg';
import {Link} from 'react-router-dom'
import './Nav.scss'

class Nav extends Component {

    

    render() {
        return (
            <div className="Nav">
                <div className="Nav__content-container">
                    <Link to = "/video" className="Nav__logo-container">
                        <img src={Logo} alt="" className="Nav__logo"/>
                    </Link>
                    <div className="Nav__input-main-container">
                        <div className="Nav__input-container">
                            <input type="text" className="Nav__input" placeholder="Search"/>
                        </div>
                        {this.props.test}
                        <div className="Nav__btn-container">
                            <Link to="/upload" className="Nav__upload-btn">
                                <button className="Nav__upload-btn" >+ Upload</button>
                            </Link>
                            <img src={UserImage} alt="" className="Nav__user-image"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;



/*

<div className="Nav__logo-container">
                    <img src={Logo} alt="" className="Nav__logo"/>
                </div>
                <div className="Nav__to-right">
                    <div className="Nav__search-container">
                        <input type="text" className="Nav__search-input" placeholder="Search"/>
                    </div>
                    <div className="Nav__upload-container">
                        <button className="Nav__upload-btn">+&nbsp;upload</button>
                        <img src={UserImage} alt="" className="Nav__user-image"/>
                    </div>
                </div>


                */