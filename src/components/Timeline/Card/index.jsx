import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = props => {
    const images = require.context('../../../assets/img', true);
    return (
        <div className="card">
            <img className="main-img" src={images(`./${props.urlImgCard}.jpg`)} alt=""/>
            <div>
                <table className="table-post">
                    <tbody>
                        <tr>
                            <td>
                                <img className="profile-img" src={images(`./${props.urlImgAuthor}.jpg`)} alt="profile"/>
                            </td>
                            <td>
                                <div className="author-post">
                                    <div>Sarah Cruiz</div>
                                    <div>Published 15 min ago</div>
                                </div>
                                <div className="popularity">
                                    <i className="fas fa-thumbs-up"><span className="likes">13</span></i>
                                    <i className="fas fa-thumbs-down"><span className="likes">12</span></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td >
                                <p className="text-card">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel ex id felis sodales laoreet nec et mauris. Etiam sollicitudin venenatis augue, interdum placerat sapien ultrices non. Praesent felis libero, laoreet nec efficitur a, aliquet nec lacus. Quisque eu feugiat magna. Quisque ut risus massa.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                    <div className="actions-card">
                                        <div className="action">
                                            Editar
                                        </div>
                                        <div className="action">
                                            Eliminar
                                        </div>
                                    </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Card.propTypes = {
    urlImgCard: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    urlImgAuthor: PropTypes.string.isRequired,
    nameAuthor: PropTypes.string.isRequired,
    time: PropTypes.any.isRequired,
    contentCard: PropTypes.string.isRequired
};

export default Card;