import React from 'react'
import todo from '../models/TodoModel'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";

type props={
    todo: string;
    id:number;
    isDone:boolean;
}

const SingleCardTodo = ({todo,id,isDone}:props) => {
  return (
    <div className='SingleCardTodo'>
        <span className='list-text'>{todo}</span>
        
        <div className="actions">
            <span><button className='edit'><FaEdit /></button></span>
            <span><button className='del'><MdDelete /></button></span>
            <span><button className='tick'><MdDoneOutline /></button></span>
        </div>
    </div>
  )
}

export default SingleCardTodo