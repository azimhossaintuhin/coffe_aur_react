import React , {useState} from 'react'
import {Header , Footer} from '../header'

const Dashboard = () => {
    const [image , setImage] = useState(null)
    const image_upload =  ()=>{
        const file = document.getElementById('file')
        
        file.click()
    }
    const file_render = (e)=>{
        e.preventDefault()
        if (e.target.files[0]) {
            console.log(URL);
            setImage(URL.createObjectURL(e.target.files[0]))
        }

    }
  return (
    <>
    <Header/>
    <div>
    <div className='p-5'>
    <div
     id="avatar_secton" >
        <img onClick={image_upload} src={image || "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"} className="w-40 h-40  group relative m-auto  text-center border overflow-hidden border-orange-400 rounded-full   "  alt="" />
        <form className='hidden' onSubmit={file_render}>
            <input type="file" id="file" className='w-full' onChange={file_render} />
        </form>

        </div>

        <div className=' m-auto  grid grid-cols-1 md:grid-cols-3 gap-3 p-10'>
            <div className='bg-green-400 p-4 shadow-lg'>Completed Todo </div>
            <div className='bg-green-400 p-4 shadow-lg'>Completed Todo </div>
            <div className='bg-green-400 p-4 shadow-lg'>Completed Todo </div>

        </div>

    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Dashboard
