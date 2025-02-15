import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {RouterProvider,createBrowserRouter  } from 'react-router-dom'
import Layout from './layout'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/about'
import Login from './components/Login'


const router = createBrowserRouter([
            {
              path:"/",
              element:<Layout />,
              children:[

                {
                  path:"",
                  element: <Home />
                },
                {
                  path:"/About",
                  element: <About />
                },
                {
                  path:"/Contact",
                  element: <Contact />
                },
                {
                  path:"/Login",
                  element:<Login/>
                }

              ]
            }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
)
