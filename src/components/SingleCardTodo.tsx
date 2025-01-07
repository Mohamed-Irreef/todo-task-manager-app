import React from 'react'
import todo from '../models/TodoModel'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";

type props={
    todo: string;
    id:number;
    isDone:boolean;
    index:number;
    deleteHandler:(id:number)=>void;
    
}

const SingleCardTodo = ({todo,id,isDone,index, deleteHandler}:props) => {
  return (
    <div className='SingleCardTodo' key={id}>
        <span className='list-text'>{index+1}. <span className='list-text'>{todo}</span></span>
        
        <div className="actions">
            <span><button className='edit'><FaEdit /></button></span>
            <span><button className='del' onClick={()=>{deleteHandler(id)}}><MdDelete /></button></span>
            <span><button className='tick' ><MdDoneOutline /></button></span>
        </div>
    </div>
  )
}

export default SingleCardTodo