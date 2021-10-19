import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const { signInUsingGoogle } = useAuth();

    return (
        <div className="register-custom">
            <div className="w-75 mx-auto">
                <h2 className="text-center mt-5">Please Register</h2>
                <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="email@example.com" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="button" class="btn btn-warning">Register</button>
                </div>
                <p className="text-center mt-3 mb-1">Already Registered ? <Link to="/login">Log In</Link></p>
                <p className="text-center mb-2">Or</p>
                <div className="d-flex justify-content-center">
                    <button
                        onClick={signInUsingGoogle}
                        className="btn btn-dark">Google Sign-In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;