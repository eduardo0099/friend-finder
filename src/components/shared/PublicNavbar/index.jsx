import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PublicNavbar.scss';
import blankLogo from './../../../assets/img/logo.png';

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
                        <a href="#" className="nav-links ">Register</a>
                    </div>
                    <div className="background-transp">
                        <a href="#" className="nav-links">Login</a>
                    </div>
                </div>
            </div>
        );
    }
}

PublicNavbar.propTypes = {

};

export default PublicNavbar;