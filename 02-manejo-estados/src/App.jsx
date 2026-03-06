import React from 'react'
import { TarjetaPresentacion } from './components/TarjetaPresentacion'
import { Contador } from './components/Contador'
import { PerfilUsuario } from './components/PerfilUsuario'
import ListaCompras from './components/ListaCompras'



const userData = {
  name:"Pepe",
  country:"Col",
  age:30
}



/* export const App = () => {
  return (
    <>
    <h1>Componente de App</h1>
  <TarjetaPresentacion name="Pepe" country="Col" age="38"/>
  </>
  )

} */

export const App = () => {
  return (
    <>
{/*     <h1>Componente de App</h1>
  <TarjetaPresentacion name={userData.name} country={userData.country} age={userData.age}/>
  <Contador />
  <PerfilUsuario /> */}
  <ListaCompras />

  </>
  )

}
