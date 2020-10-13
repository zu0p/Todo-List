import React, { useState, useEffect }  from 'react'
import axios from 'axios'
import TodoItem from './TodoItem.js'
import url from '../share/url'

const TodoList = () =>{
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const {
                data : todos
            } = await axios.post(`${url}/todo/show_todo_list`,
                {id: "teo"});
            
            setTodos(todos);
        }

        fetchData();
    },[])

    return (
        <div className="todo_list">
            <div className="header">
                <h1>Todo List</h1>
            </div>
            <div className="todos">
                {todos.map(items => (
                    <TodoItem 
                        //props
                        key={items.todo_id}
                        id={items.todo_id}
                        contents={items.contents}
                        is_com={items.is_completed}
                        is_del={items.is_deleted}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoList;