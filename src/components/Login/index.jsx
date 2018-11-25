import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import PublicNavbar from '../shared/PublicNavbar';
import Description from '../shared/Description';
import LoginForm from './LoginForm/LoginForm';

class Login extends Component {
    render() {
        return (
            <div>  
                <div className="foreground">
                    <div className="layout">
                        <PublicNavbar/>
                        <div className="container">
                            <Description/>
                            <LoginForm/>
                        </div>
                    </div>
                    
                </div>
                <div className="filter-background"/>
                <div className="background"/>
            </div>
        );
    }
}

Login.propTypes = {

};

export default Login;