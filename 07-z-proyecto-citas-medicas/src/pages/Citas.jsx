import { Link } from 'react-router-dom';



export const Citas = () => {
    const citas = [
        { id: 1, paciente: 'Juan Perez' },
        { id: 2, paciente: 'Ana Marquez' },
    ];
    return (
        <>

            <div>
                <h1>Lista de Citas Médicas</h1>
                <ul>
                    {citas.map(cita => (
                        <li key={cita.id} >
                            <Link to={`/cita/${cita.id}`}>Cita con {cita.paciente}</Link>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}
