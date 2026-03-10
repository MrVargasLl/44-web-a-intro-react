import { useEffect, useState } from "react"
import { CambiarFondo } from "./components/CambiarFondo"
import { SeguimientoRaton } from "./components/SeguimientoRaton"

export const App = () => {

  /* Fetch */ 
 const [usuarios, setUsuarios] = useState([])
  useEffect( ()=> {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then( response => response.json() )
    .then( data=> setUsuarios(data) )
    .catch( error => console.error("Error al obtener usuarios: ", error))

    
  }, [])

  
  

  return (
    <>
    
    <h1>🚀 Lista de usuarios 🌥️ </h1>
    {/* <CambiarFondo /> */}
    <SeguimientoRaton />
    <ul>
      {
        usuarios.map( usuario => (
            <li key={usuario.id}>{usuario.name}, {usuario.website}</li>
        )     
        )
      }
    </ul>
    <p>Este componente cambia el fondo del sitio</p>
    
    
    </>
  )
}