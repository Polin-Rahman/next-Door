import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handelGoogleLogin = () => {

        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })

        //.finally(() => setIsLoading(false));
    }

    return (
        <div className="login-custom">
            <div className="w-75 mx-auto">
                <h2 className="text-center mt-5">Log In</h2>
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
                    <button type="button" class="btn btn-primary">Log In</button>
                </div>
                <p className="text-center mt-5 mb-3">New User ? <Link to="/register">Create Account</Link></p>
                <div className="d-flex justify-content-center">
                    <button
                        onClick={handelGoogleLogin}
                        className="btn btn-dark">Google Sign-In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;