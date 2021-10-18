import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, pnone, specialist } = service;
    return (
        <div className="col">
            <div className="card card-sizing">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bolder">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <button type="button" className="btn btn-outline-dark mx-5 mb-3">View Details</button>
            </div>
        </div>
    );
};

export default Service;