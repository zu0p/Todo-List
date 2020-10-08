import React from 'react';

const TodoItem =({id, contents, is_com, is_del})=>{
    return(
        <div className="todo_item">
            {contents}
        </div>
    );
}

export default TodoItem;