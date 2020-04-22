import React from 'react';
import './MypageTemplate.css';

const LoginTemplate = ({form, children}) => {
    return(
        <main className = "login-container">
            <div className = "mypage-title">
                Please Sign in
            </div>
            <section className = "user-info-form-wrapper">
                {form}
            </section>
            <section className = "user-info-wrapper">
                {children}
            </section>
        </main>
    );
};

export default LoginTemplate;