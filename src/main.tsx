import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home/index.tsx'
import Integrantes from './Pages/Integrantes/index.tsx'
import FormularioCadastro from './Pages/FormularioUsuario/index.tsx'


const router = createBrowserRouter ([
  {
    path:"/",
    element: <Home/>,
  },
  {
    path:"/integrantes",
    element: <Integrantes/>,
  },
  {
    path:"/login",
    element: <FormularioCadastro/>
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
