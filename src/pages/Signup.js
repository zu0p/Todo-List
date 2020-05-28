import React, { Component } from 'react';
import SignupTemplate from '../components/SignupTemplate';
import SignupForm from '../components/SignupForm';

function Signup() {

    return (
        <div className="home-container">
            <SignupTemplate form={<SignupForm />} />
        </div>
    )

}

export default Signup;