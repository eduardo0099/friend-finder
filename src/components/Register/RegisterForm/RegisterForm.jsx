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
                    <input type="text" className="input-name" placeholder="First Name" spellCheck="false"/>
                    <input type="text" className="input-name" placeholder="Last Name" spellCheck="false"/>
                    <input type="email" placeholder="Your Email" spellCheck="false"/>
                    <input type="password" placeholder="Password" spellCheck="false"/>
                    <input type="password" placeholder="Confirm password" spellCheck="false"/>
                    <button>Register Now</button>
                </form>
            </div>
        );
    }
}

RegisterForm.propTypes = {

};

export default RegisterForm;