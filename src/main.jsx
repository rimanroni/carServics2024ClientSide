import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './router/Router'
import Contax from './Contax/Contax'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contax>
    <RouterProvider router={router}></RouterProvider>

    </Contax>
  </React.StrictMode>,
)
