import React, { useState, useEffect } from 'react';
import { NavLink, Route, Link } from 'react-router-dom';
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
            if(res.data.isLogged == 1) {// localStorage 저장
                setId(res.data.id);
                setPw(res.data.pw);
                localStorage.setItem('isLogged','true');
                localStorage.setItem('user_id', id);
                window.location = "/todo";              
            }
            else // alert
                alert("아이디 또는 비밀번호가 일치하지 않습니다.");
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