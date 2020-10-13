import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import url from '../share/url'

const LoginForm = () => {
    const [user_id, setID] = useState("")
    const [user_pw, setPW] = useState("")
    
    async function localLogin(){
        if(user_id && user_pw){
            await axios.post(`${url}/login`,{
                id: user_id,
                pw: user_pw
            })
            .then(res => {
                localStorage.setItem("token", res.data)
            })
        }
    }

    return (
        <div>
            <LoginWrapper>
                <ID value={user_id}/>
                <PW value={user_pw}/>
                <LoginBtn onClick={localLogin} />
            </LoginWrapper>
        </div>
    );
}

const LoginWrapper = styled.div``
const Input = styled.input.attrs({
    required:true
})``
const ID = styled(Input).attrs({
    type: 'text'
})``
const PW = styled(Input).attrs({type: 'password'})``
const LoginBtn = styled.button``

export default LoginForm;