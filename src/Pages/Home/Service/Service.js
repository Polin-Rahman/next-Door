import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description } = service;
    return (
        <div className="col">
            <div className="card card-sizing">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bolder">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="mx-auto mb-3">
                    <Link to={`/servicedetails/${id}`}>
                        <button type="button" className="btn btn-outline-dark">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;