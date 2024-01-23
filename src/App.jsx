import { useState } from 'react'
import './App.css'

function App() {
  var [counter , setCounter] = useState(0)
  const add =  () => {
    if(counter<=20){
      alert("You have reached the maximum limit")
    }
    else{
      setCounter(counter + 1)
    }
   
  }
  const sub =  () => {
    if(counter <= 0){
      setCounter(0)
    }
    else{
      setCounter(counter - 1)
    }
    
  }
  return (
    <>
   <div className="container">
    <div className="p-12 w-screen h-screen flex align-middle ">
      <div className=" md:w-1/2 w-full  m-auto border border-gray-500 rounded p-10 shadow-lg">
       <h1 className="mb-14 text-center font-bold md:text-3xl text-lg ">This is a Simple Counter App</h1>
       <div className="w-1/2  m-auto">
        <div className="flex md:gap-12 gap-6 justify-center">
        <span className="button button-hover" onClick={add}>+</span>
       <p className="align-middle text-3xl">{counter}</p>
       <span className="button button-hover" onClick={sub}>-</span>
        </div>
       
       </div>
       
      </div>
    </div>
   </div>
    </>
  )
}

export default App
