import React from 'react';
import errorImg from '../../images/error.jpg';

const Error = () => {
    return (
        <div className="d-flex justify-content-center my-5">
            <img className="img-fluid" src={errorImg} alt="" />
        </div>
    );
};

export default Error;