import { useRef, useState } from "react"




export const UsseRefValores = () => {

    const refValue = useRef(0)

    const [stateValue, setStateValue] = useState(0)
    console.log("Componente renderizado 🚀")

    return (
    <>

    <p> Valor con useRef: {refValue.current}</p>
    <p> Valor con usestate: {stateValue} </p>
    <button onClick={() =>  {
    refValue.current += 1
    console.log("refValue incrmentado:", refValue.current)
}}>Incrmentar useRef, No renderiza</button>
        <button onClick={() => setStateValue(stateValue + 1)}>Incrmentar useState, Si renderiza</button>

    </>
    )
}
