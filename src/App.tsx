

import { SyntheticEvent, useEffect, useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import todo from './models/TodoModel';
import TodoListShow from './components/TodoListShow';

function App() {

  const [todo,setTodo] = useState<string>("");
  const [todoList,setTodoList]=useState<todo[]>([]);
  
 
  function addTodoHandler(e:React.FormEvent){
    e.preventDefault();
    if(todo){
      setTodoList([...todoList,{id: Date.now(),todo,isDone:false}]);
      setTodo('');
      
    }
  }

  function deleteHandler(id:number){
    if(id){
      let newList:todo[] = todoList.filter((todo)=>todo.id!=id);
      setTodoList(newList);
    }
  }

 


  console.log(todoList);
  return (
    <>
      <h2 className='head'>Task Manager App</h2>
      <InputBox todo={todo} setTodo={setTodo} addTodoHandler={addTodoHandler}/>
      <TodoListShow todoList={todoList} setTodoList={setTodoList}  deleteHandler={ deleteHandler}  />
    </>
  )
}

export default App
