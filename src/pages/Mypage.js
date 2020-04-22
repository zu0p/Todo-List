import React, {Component} from 'react';
import MypageTemplate from '../components/MypageTemplate';
import UserInfoForm from '../components/UserInfoForm';
import LoginTemplate from '../components/LoginTemplate';
import LoginForm from '../components/LoginForm';

class Mypage extends Component{
    render(){
        return(
            <div>
                {/* 로그인 하지 않은 상태면 로그인 화면으로  */}
                {/* <LoginTemplate form={<LoginForm />}/> */}

                {/* 로그인 상태일 때 */}
                <MypageTemplate form={<UserInfoForm />} />
            </div>
        )
    }
}

export default Mypage;