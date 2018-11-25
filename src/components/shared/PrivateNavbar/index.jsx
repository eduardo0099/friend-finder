import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PrivateNavbar.scss';
import blankLogo from './../../../assets/img/logo.png';

class PrivateNavbar extends Component {
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
            <div className="navbar">
            
                <div className="navbar-burger">
                    <i className="fas fa-bars" onClick={this.handleOpenMenu}></i>
                </div>

                <div>
                    <img src={blankLogo}/>
                </div>

                <div className={openMenu ? "main-nav active" : "main-nav"}>
                    <div>
                        <a href="#" className="nav-links">Logout</a>
                    </div>
                </div>
            </div>
        );
    }
}

PrivateNavbar.propTypes = {

};

export default PrivateNavbar;