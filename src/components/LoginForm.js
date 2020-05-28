import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './LoginForm.css';
import axios from 'axios';
import { url } from '../shares/url';

function LoginForm() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const handleLogin = () => {
        axios.post(`${url}/user/login`,{
            id : id,
            pw : pw
        }).then(res => {
            console.log(res);
            if(res.data == "success") // localStorage 저장
                alert("success");
            else // alert
                alert("fail");
        });
    }

    return (
        <div className="login-form">
            <div className="login">
                <div className="login-element">
                    <input placeholder="id" onChange={e => setId(e.target.value)} />
                </div>
                <div className="login-element">
                    <input placeholder="pw" onChange={e => setPw(e.target.value)} />
                </div>
                <div className="gogo">
                    <button id="login-btn" onClick={handleLogin}>in</button>
                </div>
            </div>
            <NavLink to="/signup" className="signup">회원이 아니신가요?</NavLink>
        </div>
    );

}

export default LoginForm;