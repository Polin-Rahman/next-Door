import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="bg-dark text-center text-white">
                <div className="p-4 pb-0">
                    <div className="row d-flex justify-content-center">
                        <div className="col-auto">
                            <p className="pt-2">
                                <h5>Sign up for our Blogs posts</h5>
                            </p>
                        </div>

                        <div className="col-md-5 col-12">
                            <div className="form-outline form-white mb-4">
                                <input type="email" className="form-control" />
                                <label className="form-label">Email address</label>
                            </div>
                        </div>

                        <div className="col-auto">
                            <button type="submit" className="btn btn-outline-light mb-4">
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-3">
                    <h6>Do You Have Queries ?</h6>
                    <p><i className="fas fa-phone-alt"></i> +000 1313 00</p>
                    <small> © 2020 Copyright: nextDoorBD.com</small>
                </div>
            </div>
        </div >
    );
};

export default Footer;