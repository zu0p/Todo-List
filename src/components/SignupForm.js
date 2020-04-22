import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './SignupForm.css';

class SignupForm extends Component {
    render() {
        return (
            <div className="signup-form">
                <div className="signup">
                    <div className="hint">※ 영문 숫자 조합</div>
                    <div className="sigup-element">
                        <input placeholder="id" />
                        <button>중복확인</button>
                    </div>

                    <div className="hint">※ 6글자 이상</div>
                    <div className="signup-element">
                        <input placeholder="pw" />
                    </div><div className="signup-element">
                        <input placeholder="pw check" />
                        <button>일치확인</button>
                    </div>
                </div>

                <div className="gogogo">
                    <button id="signup-btn">join</button>
                </div>
            </div>
        );
    }
}

export default SignupForm;