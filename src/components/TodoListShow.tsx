import React from 'react'
import todo from '../models/TodoModel'
import SingleCardTodo from './SingleCardTodo';

interface props{
    todoList: todo[];
    setTodoList:React.Dispatch<React.SetStateAction<todo[]>>;
    deleteHandler:(id:number)=>void;
    
}

const TodoListShow = ({todoList,setTodoList, deleteHandler}:props) => {
  return (
    <div className='todo-list-container'>
        {
            todoList.map((singleTodo,index)=>{
                return(
                    <SingleCardTodo todo={singleTodo.todo} id={singleTodo.id} isDone={singleTodo.isDone} key={singleTodo.id} index={index}  deleteHandler={ deleteHandler}   />
                )
            })
        }
    </div>
  )
}

export default TodoListShow