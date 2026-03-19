

export const Notification = ({hayMensaje}) => {
    return (
    <>
        <h2>{hayMensaje ? "Tienes nuevos mensajes" : "Bandeja de entrada limpia"}</h2>
        <small>{hayMensaje && "Tienes nuevos mensajes" }</small>
    </>
    )
}

