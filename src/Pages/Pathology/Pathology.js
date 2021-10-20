import React from 'react';

const Pathology = () => {
    return (
        <div className="container my-5">
            <h2 className="mb-5 text-center">Welcome to Pathology Department</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">BLOOD TEST</h5>
                            <p className="card-text">Blood Screening+Drawing+Grouping</p>
                            <h6 className="text-primary">Price: 2100 BDT</h6>
                            <button className="btn btn-outline-danger">Go for Test</button>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">COLONOSCOPY</h5>
                            <p className="card-text">Video Short Colonoscopy.</p>
                            <h6 className="text-primary">Price: 5000 BDT</h6>
                            <button className="btn btn-outline-danger">Go for Test</button>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">DIAGNOSTIC</h5>
                            <p className="card-text">Anesthesia for Dilatation</p>
                            <h6 className="text-primary">Price: 1600 BDT</h6>
                            <button className="btn btn-outline-danger">Go for Test</button>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">ECG</h5>
                            <p className="card-text">ECG (N) (up to 5 years)(24)</p>
                            <h6 className="text-primary">Price: 400 BDT</h6>
                            <button className="btn btn-outline-danger">Go for Test</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pathology;