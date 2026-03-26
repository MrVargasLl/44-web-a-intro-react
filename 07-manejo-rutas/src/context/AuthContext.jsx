import { createContext, useContext, useState } from "react";

//1. Crear el contexto
const AuthContext = createContext()

//2. Hook personalizado permite usar otros Hooks para ahorrar importaciones por dentro
export function useAuth() {
    return useContext(AuthContext)
}


//3. Proveedor del contexto

export const AuthProvider = ({ children }) => {

//Lógica de autenticación
//const isAuthenticated = false
const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}