function ListaPlanetas({ planetas, eliminarPlaneta, editarPlaneta, setPlanetaSeleccionado }) {

    return (
        <div>

            <h2>Planetas registrados</h2>

            <ul>
                {planetas.map((planeta, index) => (

                    <li key={index}>

                        <h3
                            onClick={() => setPlanetaSeleccionado(planeta)}
                            style={{ cursor: "pointer" }}
                        >
                            {planeta.nombre}
                        </h3>

                        <button onClick={() => eliminarPlaneta(index)}>
                            Eliminar
                        </button>

                        <button
                            onClick={() => {

                                const nuevoNombre = prompt("Nuevo nombre del planeta:");
                                const nuevaDescripcion = prompt("Nueva descripción:");

                                const planetaActualizado = {
                                    ...planeta,
                                    nombre: nuevoNombre || planeta.nombre,
                                    descripcion: nuevaDescripcion || planeta.descripcion
                                };

                                editarPlaneta(index, planetaActualizado);

                            }}
                        >
                            Editar
                        </button>


                    </li>

                ))}
            </ul>

        </div>
    );
}

export default ListaPlanetas;
