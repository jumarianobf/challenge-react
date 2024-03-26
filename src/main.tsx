import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home/index.tsx'
import Integrantes from './Pages/Integrantes/index.tsx'


const router = createBrowserRouter ([
  {
    path:"/",
    element: <Home/>,
  },
  {
    path:"/integrantes",
    element: <Integrantes/>,
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
