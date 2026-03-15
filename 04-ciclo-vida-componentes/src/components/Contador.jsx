import { useState, useEffect } from "react";

export const Contador = () => {

    const [contador, setContador] = useState(0)

    useEffect(() => {
        console.log("montaje")

        return () => {
            console.log("desmontaje")
        }

    }, [])

    useEffect(() => {
        console.log("Actualización del contador", contador)
    }, [contador])

  return (
  <>
    <h2>Contador: {contador}</h2>

    <button onClick={() => { setContador(contador + 1) }}>
      Incrementar
    </button>
  </>
)
}