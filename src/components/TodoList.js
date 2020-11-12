import React, { useState, useEffect }  from 'react'
import axios from 'axios'
import TodoItem from './TodoItem.js'
import url from '../share/url'
import headers from '../share/headers'

const TodoList = () =>{
    const [todos, setTodos] = useState([""]);

    useEffect(()=>{
        async function fetchData() {
            await axios.get(`${url}/todo/show_todo_list`, {headers})
            .then(res=>{
                if(res.data.success == true){
                    const {
                        data:{
                            data: todos
                        }
                    } = res
                    setTodos(todos)
                }
            })
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
                        // props
                        key={items.id}
                        id={items.id}
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