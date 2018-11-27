import React, { Component } from 'react';
import './LoginForm.scss';
import {Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../../../actions";
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isAuth: false,
            email: "eduardo.gamarra@pucp.pe",
            password: "1234567",
            wrongAuthentication: false,
            message: "",
        }
    }
    componentDidMount(){
        this.props.fetchUsers();
    }
    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        })
    }
    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        let {users} = this.props;
        let {email, password} = this.state;
        let registeredUser = false;
        if(email.length > 0 && password.length >0){
            if(password.length >= 7){
                for (let [key, value] of Object.entries(users)) {
                    let idUser = key;
                    let infoUser = value;
                    if(infoUser.email === email && infoUser.password === password){
                        localStorage.setItem('userId',idUser);
                        this.setState({isAuth:true});
                        registeredUser = true;
                    }
                }
                if(!registeredUser){
                    this.setState({wrongAuthentication:true,message:"Email or password incorrect!!!"});
                    setTimeout(()=>{
                        this.setState({wrongAuthentication:false,message:""});
                    },4000);
                }
            }else{
                this.setState({wrongAuthentication:true,message:"Your password must be have at least 7 characters long"});
                setTimeout(()=>{
                    this.setState({wrongAuthentication:false,message:""});
                },4000);
            }
        }else{
            this.setState({wrongAuthentication:true,message:"Please, complete all the fields"});
            setTimeout(()=>{
                this.setState({wrongAuthentication:false,message:""});
            },4000);
        }
    }
    isLoggedIn = () => {
        let userId = localStorage.getItem('userId');
        let {users} = this.props;
        if(userId && users){
            for (let [idUser, infoUser] of Object.entries(users)) {
                if( idUser == userId){
                    return true;
                }
            }
        }else{
            return false;
        }
    }
    render() {
        let {email, password,wrongAuthentication,message} = this.state;

        if(this.isLoggedIn()){
            return(
                <Redirect
                    to={{
                        pathname: "/timeline",
                    }}
                />
            );
        }
        return (
            <div className="container-login-form">
                <div className="title">Login</div>
                <div className="sub-title">Log into your account</div>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <input type="email" placeholder="Your Email" value={email} onChange={this.handleEmailChange} spellCheck="false"/>
                    <input type="password" placeholder="Password" value={password} onChange={this.handlePasswordChange} spellCheck="false"/>
                    {wrongAuthentication ? <div style={{color:'red'}}>{message}</div> : ''}
                    <button type="submit">Login Now</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = ({posts,users}) => {
    return {
        users
    };
};
export default connect(mapStateToProps, actions)(LoginForm);