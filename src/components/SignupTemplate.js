import React from 'react';
import './MypageTemplate.css';

const SignupTemplate = ({form, children}) => {
    return(
        <main className = "login-container">
            <div className = "mypage-title">
                Please enter your infomation
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

export default SignupTemplate;