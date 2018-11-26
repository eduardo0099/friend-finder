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
            email: "",
            password: "",
        }
    }
    componentWillMount(){
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
        console.log("log>",email,password);

        for (let [idUser, infoUser] of Object.entries(users)) {
            if(infoUser.email === email && infoUser.password === password){
                localStorage.setItem('userId',idUser);
                this.setState({isAuth:true});
            }
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
        let {email, password} = this.state;

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