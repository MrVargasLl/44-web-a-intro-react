
import { useRef } from "react"


export const UseRefTimer = () => {

    const timerRef = useRef(null)

    console.log("Componente renderizado 🚀");
    
    const iniciarTemporizador = () => {
    timerRef.current = setTimeout( () => {
        alert("Tiempo agotado:(")
    }, 3000)
}

    const cancelarTemporizador = () => {
    clearTimeout( timerRef.current)
}

    return (
        <>
        <button onClick={ iniciarTemporizador }>Iniciar temporizador</button>
        <button onClick={ cancelarTemporizador }>Cancelar temporizador</button>
        
        </>
    )
}