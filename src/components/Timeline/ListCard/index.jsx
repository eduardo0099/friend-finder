import React, { Component } from 'react';
import Card from '../Card';
import './ListCard.scss';
import { connect } from "react-redux";
import * as actions from "../../../actions";

class ListCard extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.props.fetchPosts();
    }

    getAllCards(){
        let arrCards = [];
        if(this.props.posts){
            for (let [key, value] of Object.entries(this.props.posts)) {
                let objCard = {
                    id: key,
                    content: value.content,
                    createDate: new Date(value.createDate),
                    dislikes: JSON.parse(value.dislikes),
                    likes: JSON.parse(value.likes),
                    ownerId: value.ownerId,
                    ownerName: value.ownerName,
                    ownerPhoto: value.ownerPhoto,
                    photoCard: value.photoCard,    
                }
                arrCards.unshift(
                    <Card key={key}
                        {...objCard}
                    />
                )
            }
        }
        return arrCards;
    }
    render() {

        let listCards = this.getAllCards();

        return (
            <div className="list-cards">
                {listCards}
            </div>
        );
    }
}

const mapStateToProps = ({posts,users}) => {
    return {
        posts
    };
};

export default connect(mapStateToProps, actions)(ListCard);