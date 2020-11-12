import React, {useState} from 'react'
import KakaoLogin from 'react-kakao-login'
import styled from 'styled-components'
import axios from 'axios'
import url from '../../share/url'
import kakaoKey from '../../share/kakao'

const KakaoLoginForm =()=>{
    const responseKakao =  async result =>{
        const {profile, response} = result
        const {id, kakao_account, properties} = profile
        const {access_token, refresh_token} = response
        const {nickname, profile_image} = properties
        const {email} = kakao_account

        const body = {
            id,
            name: nickname,
            email: email,
            profileUrl: profile_image
        }
        const headers = {
            "access-token": access_token,
            "refresh-token": refresh_token,
            "Content-Type": "application/json"
        }

        const res = await axios.post(`${url}/user/kakao`, body, headers)  
        const {success, data} = res.data 
        console.log(res)
        console.log(success)
        if(success==true){
            localStorage.setItem("token", data.token)
            console.log(data)
            window.location.reload()
        }
        else if(success==false){
            alert("카카오 로그인에 실패하였습니다.")
            console.log(res)
        } 
        else{   
            console.log("대앵")  
            console.log(res)
        }
    }
 
    const responseFail = (err) => {
        console.log(err)
    }

    return (
        <>
            <KakaoBtn
                jsKey={kakaoKey}
                onSuccess={responseKakao}
                onFailure={responseFail}  
                getProfile="true"
                buttonText="Login with Kakao"
            />
        </>
    )
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

export default KakaoLoginForm