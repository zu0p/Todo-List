import React from 'react';
import TodoListTemplate from '../components/TodoListTemplate';
import TodoItemList from '../components/TodoItemList';
import Form from '../components/Form';

//로그인 후 메인페이지
function Todo() {
    return (
        <div className="home-container">
            <TodoListTemplate form={<Form />}>
                <TodoItemList />
            </TodoListTemplate>
        </div>
    )

}

export default Todo;