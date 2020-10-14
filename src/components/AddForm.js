import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import url from '../share/url'
import headers from '../share/headers'

const AddForm = ({name, ex_text, id}) => {
    const [text, setText]=useState("") 

    const handleChange=(e)=>{
        setText(e.target.value)
    }

    async function addTodo(){
        await axios.put(`${url}/todo/create_todo`, {contents: text}, {headers})
        window.location.replace("/")    
    }

    async function updateTodo(){
        await axios.post(`${url}/todo/update_todo`, {
            contents: text, id: id
        }, {headers})
        .then(res=>{
            if(res.data.success == true){
                console.log(res)
            }
        })
        window.location.replace("/")    
    }

    return (
        <div>
            <AddFromWrapper>
                <Label>{name}</Label>
                {ex_text ?   
                    <>            
                        <AddBox onChange={handleChange} value={text} placeholder={ex_text} />
                        <AddButton onClick={updateTodo}>수정</AddButton>
                    </>
                :
                    <>
                        <AddBox onChange={handleChange} value={text} />
                        <AddButton onClick={addTodo}>+</AddButton>
                    </>
                }
            </AddFromWrapper>
        </div>
    );
}

const AddFromWrapper=styled.div`
    display: 'fix'
`
const Label=styled.div``

const AddBox=styled.input.attrs({
    type : 'text',
})``

const AddButton=styled.button``

export default AddForm;