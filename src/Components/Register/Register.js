import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register Now</h3>
            <form>
                <input type="text" placeholder='Your Name' /><br />
                <input type="email" placeholder='Your Email' /><br />
                <input type="password" name="" id="" placeholder='Your Password' /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;