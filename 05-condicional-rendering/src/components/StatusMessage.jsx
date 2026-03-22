import Alert from '@mui/material/Alert';

export const StatusMessage = ({status, color}) => {
    switch (status) {
        case "loading":
            return (
    <Alert severity="info">Cargando..</Alert>
    
    )
        case "success":
        return (
    <Alert severity="success">Datos cargasdos exitosamente.</Alert> )

    case "error":
            return (
    <Alert severity="error">Hubo un error.</Alert>
            )
        default:
return (
    <p style={{color: color}}>estdo desconocido</p>)
            
    }
    
}
