import React, { FormEvent } from 'react'

interface todoProps{
    todo: string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    addTodoHandler:(e:React.FormEvent)=>void;
}
const InputBox: React.FC<todoProps> = ({todo,setTodo,addTodoHandler}:todoProps) => {
  return (
    <form action="" onSubmit={addTodoHandler}>
        <div className="input-box">
            <input type="text" placeholder='Enter a Task' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button type='submit'>Add</button>
        </div>
    </form>
  )
}

export default InputBox