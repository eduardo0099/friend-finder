import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Description.scss';

class Description extends Component {
    render() {
        return (
            <div className="container-description">
                <p className="title">Make Cool Friends !!!</p>
                <p className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur suscipit pretium. Maecenas lacinia velit a neque dictum, sit amet condimentum lectus convallis. Mauris eget tempor eros. Phasellus feugiat, arcu eleifend sollicitudin congue, erat felis commodo libero.  Morbi consectetur suscipit pretium maecenas 
                </p>
                <button>
                    Learn More
                </button>
            </div>
        );
    }
}

Description.propTypes = {

};

export default Description;