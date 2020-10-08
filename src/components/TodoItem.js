import React, {useState, useEffect} from 'react'
import styled, {css} from 'styled-components'
import axios from 'axios'

const TodoItem =({id, contents, is_com, is_del})=>{    
    const [isCompleted, setIsCompleted] = useState(is_com===1?true:false)
    const [isDeleted, setIsDeleted] = useState(is_del===1?true:false)

    async function handleChange(){        
        if(isCompleted){
            await axios.post("http://localhost:8282/todo/uncomplete_todo", {id: id})            
            setIsCompleted(false)
        }
        else{
            await axios.post("http://localhost:8282/todo/complete_todo", {id: id})
            setIsCompleted(true)
        }
    }

    async function handleDelete(){
        // 바로 지우기 전에 한번 더 물어봐야겠지
        await axios.post("http://localhost:8282/todo/delete_todo", {id: id})
        setIsDeleted(true)
    }

    return(
        <div>
            {isDeleted==false?
                <TodoItemWrapper>
                    <CompleteBox defaultChecked={isCompleted} onChange={handleChange} />
                    <TodoContents>
                        {contents}
                    </TodoContents>
                    <DeleteButton onClick={handleDelete}>X</DeleteButton>
                </TodoItemWrapper>
                :null}
        </div>
    );
}

const TodoItemWrapper=styled.div`
    display: flex;
`
const CompleteBox=styled.input.attrs({
    type: 'checkbox',
})``

const TodoContents=styled.div`
    
`
const DeleteButton=styled.button``

export default TodoItem;