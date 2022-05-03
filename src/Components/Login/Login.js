import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    const handleOnSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <h3>This is Login</h3>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <form onSubmit={handleOnSubmit}>
                <input type="email" placeholder='Your Email' /><br />
                <input type="password" name="" id="" placeholder='Your Password' /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;