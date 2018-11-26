import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RegisterForm.scss';
import { connect } from "react-redux";
import * as actions from "../../../actions";

class RegisterForm extends Component {

    handleFormSubmit = event => {
        event.preventDefault();
        const { addUser } = this.props;
        let objUser= {
            fullName:"Eduardo Gamarra",
            title:"Student",
            email: "eduardo.gamarra@pucp.pe",
            password:"123456",
            coverPhoto: "cover1",
            authorPhoto: "author1",
        }
        addUser(objUser);
        
    };
    render() {
        return (
            <div className="container-register-form">
                <div className="title">Register Now!!!</div>
                <div className="sub-title">Be cool and join today. Meet millions</div>
                <form className="register-form" onSubmit={this.handleFormSubmit}>
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
const mapStateToProps = ({}) => {
    return {
    };
};
export default connect(mapStateToProps, actions)(RegisterForm);