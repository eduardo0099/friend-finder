import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrivateNavbar from '../shared/PrivateNavbar';
import HeaderTimeline from './HeaderTimeline';
import './Timeline.scss';
import ListCard from './ListCard';

class Timeline extends Component {
    render() {
        return (
            <div>
                <PrivateNavbar/>
                <div className="container-timeline">
                    <HeaderTimeline/>
                    <ListCard/>
                </div>
                
            </div>
        );
    }
}

Timeline.propTypes = {

};

export default Timeline;