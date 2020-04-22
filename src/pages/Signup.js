import React, { Component } from 'react';
import SignupTemplate from '../components/SignupTemplate';
import SignupForm from '../components/SignupForm';

class Signup extends Component {
    render() {
        return (
            <div className="home-container">
                <SignupTemplate form={<SignupForm />} />
            </div>
        )
    }
}

export default Signup;