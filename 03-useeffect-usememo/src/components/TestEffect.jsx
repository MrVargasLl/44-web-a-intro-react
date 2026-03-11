import { useEffect, useState } from "react"
import { SeguimientoRaton } from "./SeguimientoRaton"


const TestEffect = () => {
    
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

export default TestEffect