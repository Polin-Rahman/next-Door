import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useCustomState from '../../hooks/useCustomState';
import './Register.css';

const Register = () => {

    const [error, setError] = useState('')

    const { user, signInUsingGoogle } = useAuth();

    const auth = getAuth();

    const [email, setEmail, password, setPassword] = useCustomState();

    const handelRegistration = e => {
        e.preventDefault();
        if (password.length <= 6) {
            setError('Password must be at list 6 charecter')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })

    }

    const handelEmailChange = e => {
        setEmail(e.target.value);
    }

    const handelPasswardChange = e => {
        setPassword(e.target.value);
    }

    return (
        <div className="register-custom">
            <div className="mx-auto">
                <h2 className="text-center mt-5">Please Register</h2>
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
                        <input type="submit" value="Register" className="btn btn-warning" />
                    </form>
                    <div className="text-danger">
                        {error}
                    </div>
                    {
                        user.email && <p className="text-success">Registration is Successfully done !!</p>
                    }

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