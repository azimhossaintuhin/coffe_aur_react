import React from 'react'
import { FaPen , FaTrashCan } from "react-icons/fa6";
import Header from './header/Header';
import Footer from './header/Footer';
import Modal from './Modal';

const CompletedTodo = ({model_btn}) => {
    const data =[
        "This is a One Demo",
        "This is a another Demo",
        "This is a new Task"

    ]


  return (
    <>
    <Header/>
    <div className="w-1/2  flex m-auto justify-center items-center gap-3 py-10 " >
      <ul className="w-full 
      ">
        {data.map((item ,index)=>(
                <li key={index} className="border px-4 py-2 mb-6 border-orange-400 rounded-lg shadow-lg flex justify-between items-center">
                <p className='text-gray-700 font-medium space-x-2 text-center'>{item}</p>
                  
            </li>
        ))}
        
      </ul>
      
    </div>
     <Modal/>
     <Footer/>   
</>

  )
}

export default CompletedTodo
