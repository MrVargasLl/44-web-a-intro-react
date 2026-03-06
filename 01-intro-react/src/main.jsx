import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx' //App es un componente y la letra inicial va en masyucula //uso { } para sacar varias funciones de diferentesarchivos

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


//render es una imagen final