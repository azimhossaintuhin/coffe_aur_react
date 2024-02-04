import React from 'react'
import {FaCircleUser} from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <div className="p-5 flex justify-between border border-b-orange-400 shdow-md items-center">
    <div className="logo">
        <h1 className='text-gray-600 text-2xl font-medium'>Todo<span className="text-orange-500 font-bold"> App.</span></h1>
        </div> 
        <nav>
            <ul className='flex justify-between gap-10 items-center'>
                <li className="cursor-default capitalize font-bold text-gray-600">
                  <Link to={'/'}>
                  Home
                  </Link>
                  
                  </li>
                <li className="cursor-default capitalize font-bold text-gray-600"><Link to={'/completed'}>
                  Completed Todo
                  </Link></li>
                <li className="bg-orange-400 text-white px-3 py-2 rounded shadow-lg cursor-default"> 
                <Link to={'/dashboard'}>
                <FaCircleUser className='inline mr-2' /> Azim Profile
                </Link>
                </li>
            </ul>
            </nav>
   </div>
  )
}

export default Header
