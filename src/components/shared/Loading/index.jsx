import React from 'react';
import './Loading.scss';

const Loading = () => {
    return (
        <div className="background-loading">
            <div className="lds-css ng-scope all-screen">
                <div className="lds-facebook">
                    <div>
                    </div>

                    <div>
                    </div>

                    <div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    );
};

export default Loading;