import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './LoginForm.css';

class LoginForm extends Component {
    render() {
        return (
            <div className="login-form">
                <div className="login">
                    <div className="login-element">
                        <input placeholder="id" />
                    </div>
                    <div className="login-element">
                        <input placeholder="pw" />
                    </div>
                    <div className="gogo">
                        <button id="login-btn">in</button>
                    </div>
                </div>
                <NavLink to="/signup" className="signup">회원이 아니신가요?</NavLink>
            </div>
        );
    }
}

export default LoginForm;