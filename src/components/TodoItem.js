import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import url from '../share/url'
import headers from '../share/headers'
import Modal from '../components/Modal'
import AddForm from '../components/AddForm'

const TodoItem =({id, contents, is_com, is_del})=>{    
    const [isCompleted, setIsCompleted] = useState(is_com)
    const [isDeleted, setIsDeleted] = useState(is_del)
    
    async function handleChange(){        
        if(isCompleted){
            await axios.post(`${url}/todo/uncomplete_todo`, {id: id}, {headers})         
            setIsCompleted(false)
        }
        else{
            await axios.post(`${url}/todo/complete_todo`, {id: id}, {headers})
            setIsCompleted(true)
        }
    }

    async function handleDelete(){
        // 바로 지우기 전에 한번 더 물어봐야겠지
        await axios.post(`${url}/todo/delete_todo`, {id: id}, {headers})
        setIsDeleted(true)
    }

    const [modalVisible, setModalVisible] = useState(false)

    const openModal = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    return(
        <div>
            {isDeleted==false?
                <TodoItemWrapper>
                    <CompleteBox defaultChecked={isCompleted} onChange={handleChange} />
                    {isCompleted?
                        <TodoContents completed>{contents}</TodoContents>
                    :
                        <TodoContents uncompleted>{contents}</TodoContents>
                    }
                    <UpdateButton onClick={openModal}>fix</UpdateButton>
                    <DeleteButton onClick={handleDelete}>X</DeleteButton>
                    {
                    modalVisible && <Modal 
                                        visible={modalVisible}
                                        closable={true}
                                        maskClosable={true}
                                        onClose={closeModal}>
                                            <AddForm 
                                                name={"할일 수정"}
                                                ex_text={contents}
                                                id={id}
                                            />
                                    </Modal>
                    }
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
    color: ${props => {
        return props.completed?"gray":"black"
    }}
`
const DeleteButton=styled.button``
const UpdateButton=styled.button``

export default TodoItem;