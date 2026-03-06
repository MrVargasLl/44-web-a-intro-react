import { useState } from "react"


export const Contador = () => {

//Espacio para crear objetos, fetch,   

const [contador, setContador] = useState(0)
const [color, setColor] = useState("yellow")
/* let num = 0 */
/* const [background, setBackground] = useState("tomato")
const [userDta, setUserData] = useState({user: "Pepe"})
const [userDatas, setUserDatas] = useState([])
 */

/* function sumar () {
    num = num + 1
    console.log(num);

} */

    return (
        //Lo visible en pantalla
        <>
        <h3 style={{color: color}}>El contador está en: {contador}</h3>
        {/* <h3>El num esta en: {num}</h3> */}

        {/* <button onClick={ () => setContador(contador+1)}> Incrmentar Contador</button> */}
        <button onClick={() => { 
            setContador(contador + 1) 
            setColor("blueviolet") }}>  Incrementar Contador </button>

        </>
       /*  <div>Contador</div> */
    )
}
