import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RegisterForm.scss';

class RegisterForm extends Component {
    render() {
        return (
            <div className="container-register-form">
                <div className="title">Register Now!!!</div>
                <div className="sub-title">Be cool and join today. Meet millions</div>
                <form className="register-form" action="">
                    <input type="text" className="input-name" placeholder="First Name"/>
                    <input type="text" className="input-name" placeholder="Last Name"/>
                    <input type="email" placeholder="Your Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Confirm password"/>
                    <button>Register Now</button>
                </form>
            </div>
        );
    }
}

RegisterForm.propTypes = {

};

export default RegisterForm;