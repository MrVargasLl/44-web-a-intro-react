

export const StatusMessage = ({status, color}) => {
    switch (status) {
        case "loading":
            return (
    <p style={{color: color}}  >Cargando..</p>
    )
        case "success":
        return (
    <p>Datos cargas+dos exitosamente</p>)

    case "error":
            return (
    <p style={{color: color}}>Hubo un error</p>)
        default:
return (
    <p style={{color: color}}>estdo desconocido</p>)
            
    }
    
}
