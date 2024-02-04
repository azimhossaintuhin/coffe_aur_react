import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from 'react-router-dom'
import { Routes } from './routes/Router'
import { Provider } from 'react-redux'
import store from "./app/store"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={Routes}>

    <App />


  </RouterProvider>
  </Provider>,
)
