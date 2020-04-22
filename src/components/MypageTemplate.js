import React from 'react';
import './MypageTemplate.css';

const MypageTemplate = ({form, children}) => {
    return(
        <main className = "mypage-template">
            <div className = "mypage-title">
                MY PAGE
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

export default MypageTemplate;