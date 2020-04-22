import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './Header.css';
import DODOLogo from '../images/dodo.jpg';
import MypageLogo from '../images/mypage.jpg';

class Header extends Component {
    render() {
        return (
            <div className="header-frame">                
                <NavLink to="/user" className="header-unit-mypage">
                    <img src={MypageLogo} className='MypageLogoStyle' />
                </NavLink>

                {/* 로그인 하지 않은 상태라면 logout hidden */}
                <div className="logout"> <button className="logout-btn">logout</button> </div>

                <NavLink to="/todo" className="header-unit-home">
                    <img src={DODOLogo} className='DODOLogoStyle' />
                </NavLink>

            </div>
        );
    }
}

export default Header;