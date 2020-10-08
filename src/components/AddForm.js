import React,{useState} from 'react'
import styled from 'styled-components'

const AddForm = () => {
    return (
        <div>
            <AddFromWrapper>
                <AddBox>

                </AddBox>
                <AddButton>+</AddButton>
            </AddFromWrapper>
        </div>
    );
}

const AddFromWrapper=styled.div``

const AddBox=styled.textarea``

const AddButton=styled.button``

export default AddForm;