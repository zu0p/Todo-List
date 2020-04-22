import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component{
    render(){
        //todos : todo 객체들이 들어있는 배열
        //onToggle : 체크박스 키고 끄는 함수
        //onRemove : 아이템 삭제시키는 함수
        const {todos, onToggle, onRemove} = this.props;

        return(
            <div>
                <TodoItem text="할일" />
                <TodoItem text="Todo리스트 로고 만들기" />
            </div>
        );
    }
}

export default TodoItemList;