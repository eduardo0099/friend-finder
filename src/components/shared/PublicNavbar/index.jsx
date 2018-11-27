import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PublicNavbar.scss';
import blankLogo from './../../../assets/img/logo.png';
import {Link } from "react-router-dom";
class PublicNavbar extends Component {
    constructor(props) {
        super(props);
        this.state={
            openMenu: false,
        }
    }
    handleOpenMenu = () =>{
        this.setState({
            openMenu: !this.state.openMenu,
        });
    }
    render() {
        let {openMenu} = this.state;
        return (
            <div className="background-transp navbar">
            
                <div className="navbar-burger">
                    <i className="fas fa-bars" onClick={this.handleOpenMenu}></i>
                </div>

                <div>
                    <img className="logo" src={blankLogo}/>
                </div>

                <div className={openMenu ? "main-nav active" : "main-nav"}>
                    <div className="background-transp">
                        <Link to="/register" className="nav-links border-links">Register</Link>
                    </div>
                    <div className="background-transp">
                        <Link to="/" className="nav-links border-links">Login</Link>
                    </div>
                </div>
            </div>
        );
    }
}

PublicNavbar.propTypes = {

};

export default PublicNavbar;