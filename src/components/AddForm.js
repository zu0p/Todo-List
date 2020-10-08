import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const AddForm = () => {
    const [text, setText]=useState("")

    const handleChange=(e)=>{
        setText(e.target.value)
    }

    async function handleClick(){
        await axios.post("http://localhost:8282/todo/create_todo",{
            contents: text,
            id: "teo"   //user id
        })
        window.location.replace("/")    
    }

    return (
        <div>
            <AddFromWrapper>
                <AddBox onChange={handleChange} value={text} />
                <AddButton onClick={handleClick}>+</AddButton>
            </AddFromWrapper>
        </div>
    );
}

const AddFromWrapper=styled.div``

const AddBox=styled.input.attrs({
    type : 'text',
})``

const AddButton=styled.button``

export default AddForm;