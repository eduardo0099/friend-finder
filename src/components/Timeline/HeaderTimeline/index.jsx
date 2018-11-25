import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HeaderTimeline.scss';
import photo1 from './../../../assets/img/photo1.jpg';
import profile from './../../../assets/img/profile.jpg';

class HeaderTimeline extends Component {
    render() {
        return (
            <div className="header-profile">
                {/*<img className="cover" src={photo1} alt="header-profile"/>*/}
                <div className="cover"  style={{backgroundImage: `url(${photo1})`}}/>
                <div className="container-profile">
                    <div className="profile-info">
                        <img className="profile-img" src={profile} alt="profile"/>
                        <p className="name">Sarah Cruiz</p>
                        <p className="title">Creative Director</p>
                    </div>

                    <div className="post-form">
                        <img src={profile} alt="profile"/>
                        <textarea name="" id="" cols="30" rows="5" placeholder="Write what you wish" spellCheck="false"></textarea>
                        <button>Publish</button>
                    </div>
                </div>
            </div>
        );
    }
}

HeaderTimeline.propTypes = {

};

export default HeaderTimeline;