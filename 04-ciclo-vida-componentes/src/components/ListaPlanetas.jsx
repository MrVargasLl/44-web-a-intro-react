function ListaPlanetas({ planetas, eliminarPlaneta, setPlanetaSeleccionado }) {

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

                    </li>

                ))}
            </ul>

        </div>
    );
}

export default ListaPlanetas;
