//Destructuracion es de esta forma destructuring javasrcipt
export const TarjetaPresentacion = ({name, country, age}) => {
    return(
    <>
    <div style={{ backgroundColor: "gray" }}> 
    <p>Tarjeta de presentacion</p>
    <p>Nombre: {name}</p>
    <p>Country: {country}</p>
    <p>Age: {age}</p>
    </div>

    </>
    )
}


/* export const TarjetaPresentacion = (props) => {
return(
    <>
    <p>Tarjeta de presentacion</p>
    <p>Nombre: {props.name}</p>
    <p>Country: {props.country}</p>
    <p>Age: {props.age}</p>
    </>
)
} */
