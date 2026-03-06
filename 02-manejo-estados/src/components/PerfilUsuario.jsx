import React, { useState } from 'react'

export const PerfilUsuario = () => {

const [usuario, setUsuario] = useState({nombre: "Jose", country: "Col", edad: 33})

    const actualizarEdad = () => {
        setUsuario({ ...usuario, edad: usuario.edad + 1})
        console.log(usuario);
        

    }

    return (
    <>
    
            <div>
                <p>Nombre: {usuario.nombre}</p>
                <p>Edad: {usuario.edad} </p>
                <button onClick={() => { actualizarEdad()}}>Cumplir years</button>


            </div>

    </>
    )
}
