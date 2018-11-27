import React, { Component } from 'react';
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
    handleLogOut = () =>{
        localStorage.removeItem('userId');
        window.location.reload();
    }
    render() {
        let {openMenu} = this.state;
        return (
            <div className="navbar">
            
                <div className="navbar-burger">
                    <i className="fas fa-bars" onClick={this.handleOpenMenu}></i>
                </div>

                <div>
                    <img className="logo" src={blankLogo}/>
                </div>

                <div className={openMenu ? "main-nav active" : "main-nav"}>
                    <div>
                        <div className="nav-links" onClick={this.handleLogOut}>Log out</div>
                    </div>
                </div>
            </div>
        );
    }
}

PrivateNavbar.propTypes = {

};

export default PrivateNavbar;