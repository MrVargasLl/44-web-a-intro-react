import React, { useState, useCallback } from "react"
export const ContadorConCallback = () => {

    const [count, setCount] = useState(0)

    const incrementar = useCallback(() => {
        console.log("Función de incrementar ejecutada")
        setCount(prev => prev + 1)
    }, [])

    const handleClick = useCallback( () => {
        console.log("Click en el boton");
        
    })

    console.log("El componente padre se renderizó")
    /* console.log("Incrementar: ", incrementar) */

    return (
        <>
            <h3>Contador con callback</h3>
            <p>Contador: {count}</p>
            <button onClick={incrementar}>Incrementar</button>
            <Hijo onClick={handleClick}/>
        </>
    )
}

/*Componente hijo*/
export const Hijo = React.memo( ({ onClick }) => {

    console.log("Hijo renderizado")

    return <button onClick={onClick}>Click</button>
})