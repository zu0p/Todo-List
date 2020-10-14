import React, {useState} from 'react'
import axios from 'axios'
import KakaoLogin from 'react-kakao-login'
import styled from 'styled-components'
import url from '../share/url'
import kakaoKey from '../share/kakao'
import LoginForm from '../components/LoginForm'

const Login = () => {
    const [id, setId] = useState({}) // 로그인하는 유저 고유 번호
    const [name, setName] = useState({}) // 로그인 유저 이름
    const [provider, setProvider] = useState('kakao')

    const responseKakao = (res) => {
        setId(res.profile.id)
        setName(res.profile.name)
        console.log(res)
    }

    const responseFail = (err) => {
        console.log(err)
    }

    async function localLogin(){

    }

    return(
        <>
            <LoginForm />
            <KakaoBtn
                jsKey={kakaoKey}
                onSuccess={responseKakao}
                onFailure={responseFail}
                getProfile="true"
                buttonText="Login with Kakao"
            />
        </>
    );
}

const KakaoBtn=styled(KakaoLogin)`
    padding: 0;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2)
    }
`

export default Login;