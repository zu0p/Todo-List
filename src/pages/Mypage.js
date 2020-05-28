import React, {useState, useEffect} from 'react';
import MypageTemplate from '../components/MypageTemplate';
import UserInfoForm from '../components/UserInfoForm';

function Mypage() {
    return (
        <div>
            <MypageTemplate form={<UserInfoForm />} />
        </div>
    )
}

export default Mypage;