import { useState } from 'react'
import Input from './components/Input'
import Todo from './components/Todo'
import Header from './components/header/Header'
import Footer from './components/header/Footer'
import Modal from './components/Modal'
function App() {
  const [count, setCount] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const toggoleMOdal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
    <Header/>
    <Input/>
    <Todo model_btn={toggoleMOdal}  />
    <Modal model_satate={showModal} close_btn={toggoleMOdal}/>
    <Footer/>
    </>
  )
}

export default App
