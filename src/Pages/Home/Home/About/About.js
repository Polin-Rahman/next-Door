import React from 'react';

const About = () => {
    return (
        <div className="container mb-5 p-5">
            <h2 className="text-center">Why Choose Us <span className="text-danger"><i className="fas fa-heartbeat"></i></span></h2>
            <div className="row mt-5">
                <div className="col-12 col-lg-4">
                    <p><span className="text-success fs-4 p-3"><i className="fas fa-check-square"></i></span> Affordable Prices For All</p>
                    <p><span className="text-success fs-4 p-3"><i className="fas fa-check-square"></i></span> Telemedicine Service</p>
                    <p><span className="text-success fs-4 p-3"><i className="fas fa-check-square"></i></span> Anytime Free Consultation</p>
                </div>
                <div className="col-12 col-lg-4">
                    <p><span className="text-success fs-4 p-3"><i className="fas fa-check-square"></i></span> 24/7 Emergency Service</p>
                    <p><span className="text-success fs-4 p-3"><i className="fas fa-check-square"></i></span> Trusted Medical Treatment</p>
                    <p><span className="text-success fs-4 p-3"><i className="fas fa-check-square"></i></span> Offer a wide range of care</p>
                </div>
                <div className="col-12 col-lg-4">
                    <p><span className="text-success fs-4 p-3"><i className="fas fa-check-square"></i></span> Online Pharmacy</p>
                    <p><span className="text-success fs-4 p-3"><i className="fas fa-check-square"></i></span> Tests sample collect from home</p>
                    <p><span className="text-success fs-4 p-3"><i className="fas fa-check-square"></i></span> Service all over country</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-4">
                    <button type="button" className="btn btn-outline-danger mt-3 ms-5">Emergency Contact</button>
                </div>
                <div className="col-12 col-lg-4">
                    <button type="button" className="btn btn-outline-secondary mt-3 ms-5">Visit Online Pharmacy</button>
                </div>
                <div className="col-12 col-lg-4">
                    <button type="button" className="btn btn-outline-primary mt-3 ms-5">Book Apoinment</button>
                </div>
            </div>

        </div>
    );
};

export default About;