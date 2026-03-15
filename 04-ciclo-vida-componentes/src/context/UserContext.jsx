/* Crear el contexto */
import { createContext } from "react";
export const UserContext = createContext()


/* Crear el provider */
export const UserProvider = ({ children }) => {

    const user = {
    nombre: "pepe",
    correo: "pepe@pepe.com",
    tema: "react"
}

return (
    <UserContext.Provider value={{ user }}>
        {children}
    </UserContext.Provider>
)

}