import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"


export const Personajes = () => {

    const { user } = useContext(UserContext)
    const [personajes, setPersonajes] = useState([])

    useEffect(() => {

  const obtenerPersonajes = async () => {
    try {
      const respuesta = await fetch("https://rickandmortyapi.com/api/character")
      const data = await respuesta.json()

      setPersonajes(data.results)

    } catch (error) {
      console.error("Error", error)
    }
  }

  obtenerPersonajes()

}, [])

  return (
  <>
    <h2>🧟 Mis personajes favoritos:{user.tema}</h2>
    <ul>
  {
    personajes.map((per) => (
      <li key={per.id}>
        {per.name}, {per.status}
      </li>
    ))
  }
</ul>
  </>
)
}
