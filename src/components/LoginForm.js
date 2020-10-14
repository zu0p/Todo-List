import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import url from '../share/url'

const LoginForm = () => {
    const [user_id, setID] = useState("")
    const [user_pw, setPW] = useState("")
    
    async function localLogin(){
        console.log(user_id)
        if(user_id && user_pw){
            await axios.post(`${url}/user/login`,{
                id: user_id,
                pw: user_pw
            })
            .then((res) => {
                console.log(res)
                if(res.data.success == true){                    
                    localStorage.setItem("token", res.data.data)
                    window.location.replace("/")
                }
                else{
                    console.log("login실패")
                }
            })
        }
    }

    return (
        <div>
            <LoginWrapper>
                <ID onChange={e=>{setID(e.target.value)}} value={user_id}/>
                <PW onChange={e=>{setPW(e.target.value)}} value={user_pw}/>
                <LoginBtn onClick={localLogin} >로그인</LoginBtn>
            </LoginWrapper>
        </div>
    );
}

const LoginWrapper = styled.div``
const Input = styled.input`
    width: 170px;
    height: 44px;
    border: 1px solid "gray";
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;
const ID = styled(Input).attrs({
    type: 'text'
})``
const PW = styled(Input).attrs({
    type: 'password'
})``
const LoginBtn = styled.button``

export default LoginForm;