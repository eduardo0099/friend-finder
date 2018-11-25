import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './ListCard.scss';

class ListCard extends Component {
    
    render() {
        let prueba1 = {
            urlImgCard: "card1",
            likes: 13,
            dislikes: 2,
            urlImgAuthor: "author1",
            nameAuthor: "Sarah Cruiz",
            time: new Date(),
            contentCard: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non leo ut felis viverra dignissim. Aenean a gravida sem. Sed velit quam, eleifend nec magna non, luctus tempus ante. Sed quis dapibus sapien, sed venenatis ipsum. Cras quis risus gravida mi volutpat bibendum vel vel nibh. Duis eu mollis augue. ",
        }
        return (
            <div className="list-cards">
                <Card {...prueba1}/>
                <Card {...prueba1}/>
                <Card {...prueba1}/>
            </div>
        );
    }
}

ListCard.propTypes = {

};

export default ListCard;