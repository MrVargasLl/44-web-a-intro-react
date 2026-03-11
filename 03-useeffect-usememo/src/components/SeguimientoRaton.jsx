import React, { useEffect, useState } from 'react'

export const SeguimientoRaton = () => {

    const [posicion, setPosicion] = useState({x: 0, y: 0})
        
        useEffect(() => {
        
            const manejarMovimiento = (e) => {
                setPosicion({x: e.clientX, y: e.clientY})
            }

            window.addEventListener("mousemove", manejarMovimiento)
            /* document.body.style.backgroundColor = ""; */
        
        return () => {
            window.removeEventListener("mousemove", manejarMovimiento)
            /* document.body.style.backgroundColor = "tomato"; */
            console.log("Detector de mouse detectado")
            
        }
        }, [])
        

    return (
    <div>
        <h2>🦓 Posicion del raton</h2>
        <p>X: {posicion.x}, Y: {posicion.y}</p>
    </div>
    )
}
