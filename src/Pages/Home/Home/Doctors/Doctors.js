import React from 'react';
import doctor1 from '../../../../images/doctors/dr1.jpg';
import doctor2 from '../../../../images/doctors/dr2.jpg';
import doctor3 from '../../../../images/doctors/dr3.jpg';

import './Doctors.css';

const Doctors = () => {
    return (
        <div className="doctors-container">
            <div className="continer mb-5">
                <h1 className="text-center mb-5"><i className="fas fa-stethoscope"></i> Our expart Doctors</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={doctor1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr. Alexander Henry</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={doctor2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr. Sophia Charlotte</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={doctor3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dr. James Benjamin</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;