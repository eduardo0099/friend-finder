import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ModalDelete.scss';

class ModalDelete extends Component {

    handleDelete = () => {
        this.props.onDeletePost();
    }

    handleCancel = () => {
        this.props.onCancelDelete();
    }
    render() {
        return (
            <div className="background-modal">
                <div className="modal">
                    <div className="content-modal">
                        Delete this post?
                        <div>
                            <button className="btt-modal" onClick={this.handleDelete}>Delete</button>
                            <button className="btt-modal" onClick={this.handleCancel}>Cancel</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

ModalDelete.propTypes = {

};

export default ModalDelete;