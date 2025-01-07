import React from 'react'
import todo from '../models/TodoModel'
import SingleCardTodo from './SingleCardTodo';

interface props{
    todoList: todo[];
    setTodoList:React.Dispatch<React.SetStateAction<todo[]>>;
}

const TodoListShow = ({todoList,setTodoList}:props) => {
  return (
    <div className='todo-list-container'>
        {
            todoList.map((singleTodo)=>{
                return(
                    <SingleCardTodo todo={singleTodo.todo} id={singleTodo.id} isDone={singleTodo.isDone}/>
                )
            })
        }
    </div>
  )
}

export default TodoListShow