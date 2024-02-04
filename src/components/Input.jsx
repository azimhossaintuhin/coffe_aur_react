import React , {useState} from 'react'
import { useDispatch } from 'react-redux'


const Input = () => {
  const dispatch = useDispatch()
  const [task , setTask]= useState('')

  const createHandler =(e)=>{
    e.preventDefault()
    if(!task){
      alert('Please write your task')
    }
    else{
      dispatch({type:"todos/addTodo", payload:task})
    }
 
    setTask('')
  }

  return (
    <div className="w-1/2  flex m-auto justify-center items-center gap-3 py-10 px-5 ">
       
      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}  placeholder='Write your Todo Here' className="border px-4 py-2 rounded w-screen outline-orange-400 border-orange-300 shadow-lg text-gray-500 duration-200" />
      <input onClick={e=>createHandler(e)} type="button" value="Add" className="bg-orange-600 px-6 py-2 rounded text-white shadow-lg  duration-150" />
    </div>
  )
}

export default Input
