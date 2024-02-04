import React from 'react'
import {RiCloseFill} from 'react-icons/ri'


const Modal = ({model_satate , close_btn}) => {
  return ( <>
    <div className={`bg-gray-700 p-4 absolute w-screen h-screen bottom-0 inset-x-0 opacity-40 duration-500  ${
        model_satate ? 'block' : 'hidden'
    }`}>

    </div>
    <div className={`w-fit md:w-2/4  m-auto border border-orange-40 absolute top-48 inset-x-0  bg-white rounded shadow-lg  duration-500 ${
        model_satate ? 'block' : 'hidden'
    } duration-500`}>
    <div className='w-full  border-b-orange-500 bg-orange-400 flex justify-between items-center p-3 relative' id="modal_header ">
      <h4 className="font-semibold text-white ">This is a task</h4>
      <span className="text-xl bg-orange-500 rounded p-2 text-white  " onClick={close_btn}><RiCloseFill /></span>
    </div>
    <div className="p-4 relative">
      <form action="#" onSubmit={(e)=>(
        e.preventDefault()
      )}>
        <div className="mb-2">
        <label className="font-semibold block mb-2">Task Title</label>
        <input type="text" className=" outline-none w-full border rounded border-orange-400 p-2" />
        </div>
        <div className="mb-2">
        <label className="font-semibold block mb-2">Description</label>
        <textarea type="text" className=" outline-none w-full border rounded border-orange-400 p-2 overflow-hidden" ></textarea>
        </div>
        <div className="mb-2">
       <input type="submit" value="Done" className="me-2 bg-green-300 px-4 py-2 rounded text-white" />
        <input type="submit" value="Submit"className="me-2 bg-orange-300 px-4 py-2 rounded text-white" />
        </div>
      
      </form>
  
    </div>
  </div>
  </>
  )
}

export default Modal
