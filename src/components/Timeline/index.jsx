import React, { Component } from 'react';
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';
import PrivateNavbar from '../shared/PrivateNavbar';
import HeaderTimeline from './HeaderTimeline';
import './Timeline.scss';
import ListCard from './ListCard';
import * as actions from "../../actions";
import ModalDelete from './ModalDelete';

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isAuth: false,
            infoProfile: {},
        }
    }
    componentDidMount(){
        this.props.fetchUsers(() =>{
            if(this.isAuth()){
                this.setState({loading:false,isAuth:true});
            }else{
                this.setState({loading:false,isAuth:false});
            }
        })
        
    }
    isAuth = () => {
        let {users} = this.props;
        let userId = localStorage.getItem('userId');
        if(userId){
            for (let [key, value] of Object.entries(users)){
                if(key===userId){
                    this.setState({infoProfile: value});
                    return true;
                }
            }
            localStorage.removeItem('userId');
            return false;
        }else{
            return false;

        }
    }
    render() {
        let {loading, isAuth, infoProfile } = this.state; 

        if(loading){
            return <span/>
        }else if(!loading && !isAuth){
            return (
                <Redirect
                    to={{
                        pathname: "/",
                    }}
                />
            );
        }

        return (
            <div>
                <PrivateNavbar/>
                <div className="container-timeline">
                    
                    <HeaderTimeline {...infoProfile}/>
                    <ListCard/>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = ({posts,users}) => {
    return {
        users
    };
};

export default connect(mapStateToProps, actions)(Timeline);