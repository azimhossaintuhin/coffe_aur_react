import React from 'react'
import { FaPen , FaTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../reducers/todoslicer';


const Todo = ({model_btn}) => {
  
    const data = useSelector(state => state.todo)
    console.log(data);
    const dispatch = useDispatch()



  return (
    <>
    <div className="w-fit md:w-1/2 flex m-auto justify-center items-center gap-3 py-10 " >
      <ul className="w-full 
      ">
        {data.map((item ,index)=>(
                <li key={item.id} className="border px-4 py-2 mb-6 border-orange-400 rounded-lg shadow-lg flex justify-between items-center">
                <p className='text-gray-700 font-medium space-x-2 w-1/2'>{item.task}</p>
                   <div className="flex justify-between gap-3">
                    <span  className="  bg-sky-300  text-sky-500 px-3 py-1.5 text-sm rounded" onClick={model_btn}><FaPen /></span>
                    <span className="  bg-red-300  text-red-500 px-3 py-1.5 text-sm rounded" onClick={()=>(dispatch({type:"todos/removeTodo", payload:item.id}))}><FaTrashCan  /></span>
                    </div> 
            </li>
        ))}
        
      </ul>
      
    </div>
        
</>

  )
}

export default Todo
