import React, {useState} from 'react'
import styled from 'styled-components'
import LoginForm from '../components/LoginForm'
import KakaoLoginForm from '../components/OAuth/KakaoLoginForm'

const Login = () => {
    return(
        <>
            <LoginForm />
            <KakaoLoginForm />
        </>
    );
}

export default Login;