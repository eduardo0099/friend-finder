import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LoginForm.scss';

class LoginForm extends Component {
    render() {
        return (
            <div className="container-login-form">
                <div className="title">Login</div>
                <div className="sub-title">Log into your account</div>
                <form className="login-form" action="">
                    <input type="email" placeholder="Your Email"/>
                    <input type="text" placeholder="Password"/>
                    <button>Login Now</button>
                </form>

            </div>
        );
    }
}

LoginForm.propTypes = {

};

export default LoginForm;