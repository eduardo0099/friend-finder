import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrivateNavbar from '../shared/PrivateNavbar';
import HeaderTimeline from './HeaderTimeline';
import './Timeline.scss';

class Timeline extends Component {
    render() {
        return (
            <div>
                <PrivateNavbar/>
                <div className="container-timeline">
                    <HeaderTimeline/>
                </div>
                
            </div>
        );
    }
}

Timeline.propTypes = {

};

export default Timeline;