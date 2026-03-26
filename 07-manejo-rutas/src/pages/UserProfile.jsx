import { useParams } from "react-router-dom";



export const UserProfile = () => {

    const { id } = useParams();
    return (
    <>
    <h1> Bienvenido usuario {id}</h1>
    </>
    )
}
