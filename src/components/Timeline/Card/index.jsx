import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import { connect } from "react-redux";
import * as actions from "../../../actions";
import ModalDelete from '../ModalDelete';
class Card extends Component {
    constructor(props) {
        super(props);
        this.userLogged = localStorage.getItem('userId');
        this.state = {
            likes: this.props.likes,
            dislikes: this.props.dislikes,
            editing: false,
            newContent: "",
            showModalDelete: false,
        }
    }

    handleLike = () => {
        const { updatePopularity } = this.props;
        let { likes, dislikes } = this.state;
        let newLikes
        let newDislikes
        if (!likes.includes(this.userLogged)) {
            newLikes = likes.concat([this.userLogged]);
            newDislikes = dislikes.filter(e => e != this.userLogged) 
            this.setState({
                likes: newLikes,
                dislikes: newDislikes,
            })
        } else {
            newLikes = likes.filter(e => e != this.userLogged);
            this.setState({
                likes: newLikes,
            })
        }
        updatePopularity(this.props.id,JSON.stringify(newLikes),JSON.stringify(newDislikes));
    }
    handleDislike = () => {
        const { updatePopularity } = this.props;
        let { likes, dislikes } = this.state;
        let newLikes
        let newDislikes

        if (!dislikes.includes(this.userLogged)) {
            newLikes = likes.filter(e => e != this.userLogged)
            newDislikes = dislikes.concat([this.userLogged])
            this.setState({
                dislikes: newDislikes,
                likes: newLikes,
            })
        } else {
            newDislikes = dislikes.filter(e => e != this.userLogged)
            this.setState({
                dislikes: newDislikes,
            })
        }
        updatePopularity(this.props.id,JSON.stringify(newLikes),JSON.stringify(newDislikes));
    }
    handleDeletePost = () => {
        const { deletePost } = this.props;
        deletePost(this.props.id);
        this.setState({
            showModalDelete: false,
        })
    }
    handleCancelDelete = () => {
        this.setState({
            showModalDelete: false,
        })
    }
    handleShowDelete = () => {
        this.setState({
            showModalDelete: true,
        })
    }
    handleEditPost = () => {
        this.setState({
            editing:true,
            newContent: this.props.content,
        })
    }
    handleSubmitEdit = () => {
        const { updateContentPost } = this.props;

        updateContentPost(this.props.id,this.state.newContent);
        this.setState({
            editing:false,
            newContent: ""
        })

    }
    handleCancelEdit = () => {
        this.setState({
            editing:false,
            newContent: ""
        })
    }
    handleContentPostChange = (e) => {
        this.setState({
            newContent: e.target.value
        })
    }
    render() {
        let { photoCard, ownerId, ownerName, ownerPhoto, createDate, content } = this.props;
        let {likes, dislikes,editing,newContent,showModalDelete} = this.state;

        const images = require.context('../../../assets/img', true);

        return (
            <div className="card">
                {
                    showModalDelete ? 
                        <ModalDelete onDeletePost={this.handleDeletePost} onCancelDelete={this.handleCancelDelete}/>
                        :
                        ''
                }
                
                <img className="main-img" src={images(`./${photoCard}.jpg`)} alt="" />
                <div>
                    <table className="table-post">
                        <tbody>
                            <tr>
                                <td>
                                    <img className="profile-img" src={images(`./${ownerPhoto}.jpg`)} alt="profile" />
                                </td>
                                <td>
                                    <div className="author-post">
                                        <div>{ownerName}</div>
                                        <div>Published {createDate.toDateString()}</div>
                                    </div>
                                    <div className="popularity">
                                        <i className="fas fa-thumbs-up" onClick={this.handleLike}><span className="likes">{likes.length}</span></i>
                                        <i className="fas fa-thumbs-down" onClick={this.handleDislike}><span className="likes">{dislikes.length}</span></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td >
                                    { !editing ? 
                                        <p className="text-card">
                                            {content}
                                        </p>
                                        :
                                        <textarea className="content-textarea" id="" cols="30" rows="5" value={newContent} onChange={this.handleContentPostChange} placeholder="Write what you wish" spellCheck="false"></textarea>
                                    }
                                    
                                </td>
                            </tr>
                            {this.userLogged === ownerId ?
                                <tr>
                                    <td></td>
                                    <td>
                                        <div className="actions-card">
                                        {
                                            !editing ? 
                                                <span>
                                                    <div className="action" onClick={this.handleEditPost}>
                                                        Editar
                                                    </div>
                                                    <div className="action" onClick={this.handleShowDelete}>
                                                        Eliminar
                                                    </div>
                                                </span>
                                                :
                                                <span>
                                                    <div className="action" onClick={this.handleSubmitEdit}>
                                                        Grabar
                                                    </div>
                                                    <div className="action" onClick={this.handleCancelEdit}>
                                                        Cancelar
                                                    </div>
                                                </span>
                                                
                                        }
                                        </div>
                                    </td>
                                </tr>
                                :
                                <tr><td><br /></td></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({posts,users}) => {
    return {
    };
};

export default connect(mapStateToProps, actions)(Card);