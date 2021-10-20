import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useCustomState from '../../hooks/useCustomState';
import './Login.css';

const Login = () => {

    const auth = getAuth();

    const [email, setEmail, password, setPassword] = useCustomState();

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handelGoogleLogin = () => {

        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    // email pass login

    const handelRegistration = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(result => {
                history.push(redirect_uri)
            })
    }

    const handelEmailChange = e => {
        setEmail(e.target.value);
    }

    const handelPasswardChange = e => {
        setPassword(e.target.value);
    }


    return (
        <div className="login-custom">
            <div className="mx-auto">
                <h2 className="text-center mt-5">Log In</h2>
                <div className="w-50 mx-auto">
                    <form onSubmit={handelRegistration}>
                        <label htmlFor="email">Email: </label>
                        <input
                            onBlur={handelEmailChange}
                            type="text" name="email" className="form-control" />
                        <label htmlFor="email">Password: </label>
                        <input
                            onBlur={handelPasswardChange}
                            type="password" name="password" className="form-control" />
                        <br />
                        <input type="submit" value="Log In" className="btn btn-primary" />
                    </form>
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