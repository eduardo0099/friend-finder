import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './RegisterForm.scss';
import { connect } from "react-redux";
import * as actions from "../../../actions";

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email:"",
            password1: "",
            password2: "",

            showMessage: false,
            message: "",
            userCreated: false,
        }
    }
    handleFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value,
        })
    }
    handleLastNameChange = (e) => {
        this.setState({
            lastName: e.target.value,
        })
    }
    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        })
    }
    handlePassword1Change = (e) => {
        this.setState({
            password1: e.target.value,
        })
    }
    handlePassword2Change = (e) => {
        this.setState({
            password2: e.target.value,
        })
    }
    handleFormSubmit = event => {
        event.preventDefault();
        const { addUser } = this.props;
        let {firstName,lastName,email,password1,password2} = this.state;
        if(firstName && lastName && email && password1 && password2){
            if(password1 === password2){
                if(password1.length >=7 && password2.length >=7){
                    let indexRandom = Math.floor(Math.random() * 4);
                    let titles = ["Genin","Chuunin","Jounin","Kage"]
                    let objUser= {
                        fullName:firstName + " " +lastName,
                        title: titles[indexRandom],
                        email: email,
                        password: password1,
                        coverPhoto: "cover"+(indexRandom+1),
                        authorPhoto: "author"+(indexRandom+1),
                    }
                    addUser(objUser);
                    this.setState({userCreated:true});
                }else{
                    this.setState({showMessage:true,message:"Password must have at least 7 characters"});
                    setTimeout(()=>{
                        this.setState({showMessage:false,message:""});
                    },4000);
                }   
            }else{
                this.setState({showMessage:true,message:"Password does not match the confirm password"});
                setTimeout(()=>{
                    this.setState({showMessage:false,message:""});
                },4000);
            }
        }else{
            this.setState({showMessage:true,message:"Please, complete all the fields"});
            setTimeout(()=>{
                this.setState({showMessage:false,message:""});
            },4000);
        }    
    };
    render() {
        let {firstName,lastName,email,password1,password2,showMessage,message,userCreated} = this.state;
        if(userCreated){
            return(
                <Redirect
                    to={{
                        pathname: "/timeline",
                    }}
                />
            );
        }
        return (
            <div className="container-register-form">
                <div className="title">Register Now!!!</div>
                <div className="sub-title">Be cool and join today. Meet millions</div>
                <form className="register-form" onSubmit={this.handleFormSubmit}>
                    <input type="text" className="input-name" value={firstName} onChange={this.handleFirstNameChange} placeholder="First Name" spellCheck="false"/>
                    <input type="text" className="input-name" value={lastName} onChange={this.handleLastNameChange} placeholder="Last Name" spellCheck="false"/>
                    <input type="email" placeholder="Your Email" value={email} onChange={this.handleEmailChange} spellCheck="false"/>
                    <input type="password" placeholder="Password" value={password1} onChange={this.handlePassword1Change} spellCheck="false"/>
                    <input type="password" placeholder="Confirm password" value={password2} onChange={this.handlePassword2Change} spellCheck="false"/>
                    {showMessage ? <div style={{color:'red'}}>{message}</div> : ''}
                    <button>Register Now</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = ({}) => {
    return {
    };
};
export default connect(mapStateToProps, actions)(RegisterForm);