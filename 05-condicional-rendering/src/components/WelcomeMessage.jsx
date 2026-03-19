

export const WelcomeMessage = ({isLoggedIn}) => {

    if(isLoggedIn){
    return (
    <h1 style={{color: "green"}}>Bienvenido usuario</h1>
    )
}
else {
    return (
    <h1 style={{color: "red"}}>No has iniciado sesion</h1>
    )

}
}
