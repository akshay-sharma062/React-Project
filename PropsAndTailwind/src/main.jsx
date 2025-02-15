import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name="akshay" email="akshay@gmail" img="./public/1716455237989 (1).jpg"/>
    <App name="akshay" email="akshay@gmail" img="./public/1716455237989 (1).jpg"/>
    <App name="akshay" email="akshay@gmail" img="./public/1716455237989 (1).jpg"/>
   
  </StrictMode>
)
