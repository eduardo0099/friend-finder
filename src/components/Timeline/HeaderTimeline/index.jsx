import React, { Component } from 'react';
import './HeaderTimeline.scss';
import { connect } from "react-redux";
import * as actions from "../../../actions";

class HeaderTimeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentPost: "",
        }
    }
    handleContentPostChange = (e) => {
        this.setState({
            contentPost: e.target.value
        })
    }
    handlePublishPost = () => {
        
        let {authorPhoto,fullName, createPost} = this.props;
        let contentPost = this.state.contentPost;
        if(contentPost.length > 0){
            let indexRandom = Math.floor(Math.random() * 4);
            let ownerId = localStorage.getItem('userId');
            
            let objPostToCreate = {
                photoCard: "card"+(indexRandom+1),
                ownerId: ownerId,
                ownerName: fullName,
                ownerPhoto: authorPhoto,
                createDate: new Date().getTime(),
                likes: JSON.stringify([]),
                dislikes: JSON.stringify([]),
                content: contentPost,
            }
            createPost(objPostToCreate);
            this.setState({contentPost:""});
        }
    }
    render() {
        let {authorPhoto,coverPhoto,fullName, title} = this.props;
        let {contentPost} = this.state;

        const images = require.context('../../../assets/img', true);
        return (
            <div className="header-profile">

                <div className="cover"  style={{backgroundImage: `url(${images('./'+coverPhoto + '.jpg')})`,backgroundSize:'cover'}}/>
                <div className="container-profile">
                    <div className="profile-info">
                        <img className="profile-img" src={images(`./${authorPhoto}.jpg`)} alt="profile"/>
                        <p className="name">{fullName}</p>
                        <p className="title">{title}</p>
                    </div>

                    <div className="post-form">
                        <img src={images(`./${authorPhoto}.jpg`)} alt="profile"/>
                        <textarea name="" id="" cols="30" rows="5" value={contentPost} onChange={this.handleContentPostChange} placeholder="Write what you wish" spellCheck="false"></textarea>
                        <button onClick={this.handlePublishPost}>Publish</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({posts,users}) => {
    return {
    };
};

export default connect(mapStateToProps, actions)(HeaderTimeline);