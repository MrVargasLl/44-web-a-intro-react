import Button from '@mui/material/Button';


export const Card = ({children}) => {
    return (
    <div style={{
        border: "1px solid white", 
        padding: "20px",
        borderRadius:"6px",
        

    }}>
    {children}
    <Button variant="outlined">Escucha radio online</Button>
    </div>
    )
}
