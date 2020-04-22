import React from 'react';
import './UserInfoForm.css';

const UserInfoForm = ({ value, onChange, onClick, onKeyPress }) => {
    return (
        <div className="user-info-form">
            <div className="table">
                <div className="tr">
                    <div className="td" id="thead">id: </div>
                    <div className="td" id="tinput">***님</div>
                </div>

                <div className="tr">
                    <div className="td" id="thead">pw: </div>
                    <div className="td" id="tinput">
                        <input type="password"/>
                    </div>
                    <div className="td"><button>check</button></div>
                </div>

                <div className="tr">
                    <div className="td" id="thead">new pw: </div>
                    <div className="td" id="tinput"><input type="password" /></div>
                </div>

                <div className="tr">
                    <div className="td"></div>
                    <div className="td" id="tinput"><input type="password" placeholder="비밀번호 확인" /></div>
                    <div className="td"><button>check</button></div>
                </div>
            </div>

        </div>
    );
};

export default UserInfoForm;