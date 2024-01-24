import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("slate")

  return (
    <>
    <div className={`w-screen  h-screen duration-200 bg-${color}-600  relative`}></div>
    <div className=" w-2/3 bg-white p-2 absolute bottom-3 m-auto left-0 -right-0 flex flex-wrap justify-center gap-10 rounded border-2 border-blue-400 shadow ">
      <div className="bg-red-600 p-2 rounded hover:ring hover:ring-blue-400 hover:duration-500 capitalize text-white cursor-default" onClick={()=>setColor("red")}>Red</div>
      <div  className="bg-yellow-600 p-2 rounded hover:ring hover:ring-blue-400 hover:duration-500 capitalize text-white cursor-default" onClick={()=>setColor("yellow")}>Yellow</div>
      <div  className="bg-blue-600 p-2 rounded hover:ring hover:ring-blue-400 hover:duration-500 capitalize text-white cursor-default" onClick={()=>setColor("blue")}> Blue</div>
      <div  className="bg-green-600 p-2 rounded hover:ring hover:ring-blue-400 hover:duration-500 capitalize text-white cursor-default" onClick={()=>setColor("green")}>Green</div>
      <div  className="bg-gray-600 p-2 rounded hover:ring hover:ring-blue-400 hover:duration-500 capitalize text-white cursor-default" onClick={()=>setColor("gray")}>Gray</div>
      <div  className=" bg-orange-500 p-2 rounded hover:ring hover:ring-blue-400 hover:duration-500 capitalize text-white cursor-default" onClick={()=>setColor("orange")}>Orange</div>
      <div  className=" bg-indigo-600 p-2 rounded hover:ring hover:ring-blue-400 hover:duration-500 capitalize text-white cursor-default" onClick={()=>setColor("indigo")}>Indigo</div>
      <div  className=" bg-sky-600 p-2 rounded hover:ring hover:ring-blue-400 hover:duration-500 capitalize text-white cursor-default" onClick={()=>setColor("sky")}>sky</div>
      
    </div>
    </>

  )
}

export default App
