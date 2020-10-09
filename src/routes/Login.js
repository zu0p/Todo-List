import React, {useState} from 'react'
import axios from 'axios'
import KakaoLogin from 'react-kakao-login'
import styled from 'styled-components'
import kakaoButton from '../images/kakao_login_medium_narrow.png'

const Login = () => {
    const [resKakao, setResKakao] = useState([])
    const responseKakao = (res) =>{
        setResKakao(res)

        // fetch

    }

    return(
        <div>
            <KakaoBtn
                jsKey={'08f490ae27c5d710205522d64ade90f1'}
                onSuccess={responseKakao}
                onFailure={(res)=>console.res}
                getProfile={true}>
                    <img scr={kakaoButton} />
            </KakaoBtn>
        </div>
    );
}

const KakaoBtn=styled.button``

export default Login;