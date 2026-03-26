import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export const NavBar = () => {

    /* const isAuthenticated = false */
    const { isAuthenticated } = useAuth()

    // isAuthenticated && "hola"

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href="http://www.jango.com" target="_blank">
                            Escucha Radio Online
                        </a>
                    </li>
                    <li>
                        <a href="http://www.jango.com" target="_blank">
                            Escucha Radio Online
                        </a>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    {isAuthenticated && (
                        <li>
                            <Link to="/user/1">Usuario 1</Link>
                        </li>
                    )}
                    {!isAuthenticated && (
                        <>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </>
                    )}
                    {isAuthenticated && (
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </>
    )
}