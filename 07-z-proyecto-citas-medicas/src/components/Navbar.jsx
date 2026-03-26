import { Link } from "react-router-dom"


export const NavBar = () => {
    return (
        <>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/citas">Ver Citas</Link>
            </nav>


        </>
    )
}
