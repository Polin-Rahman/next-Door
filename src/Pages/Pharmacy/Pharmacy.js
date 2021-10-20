import React from 'react';

import pimg1 from '../../images/pharmacy/phr1.jpg';
import pimg2 from '../../images/pharmacy/phr2.jpg';
import pimg3 from '../../images/pharmacy/phr3.jpg';

const Pharmacy = () => {
    return (
        <div className="container my-5">
            <h2 className="mb-5 text-center">Welcome to our Online Pharmacy</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={pimg1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Medicine</h5>
                            <p className="card-text">All medicines are available here.</p>
                        </div>
                        <button type="button" className="btn btn-outline-dark">Shop now</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={pimg2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Supplement</h5>
                            <p className="card-text">All Supplements and energy booster available here.</p>
                        </div>
                        <button type="button" className="btn btn-outline-dark">Shop now</button>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={pimg3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Others</h5>
                            <p className="card-text">Others medical necessary items available here.</p>
                        </div>
                        <button type="button" className="btn btn-outline-dark">Shop now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pharmacy;