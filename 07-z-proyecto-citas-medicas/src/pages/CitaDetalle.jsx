import { useParams } from "react-router-dom";

export const CitaDetalle = () => {

    const { id,paciente } = useParams();
    // Simulación de detalles de la cita (en un caso real, vendrían de una API o base de datos)
    const cita = {
        id: id,
        doctor: 'Dra. Martínez',
        paciente: "Cliente " + id,
        fecha: '2026-04-15',
        hora: '10:00 AM',
        motivo: 'Consulta de rutina',
    };


    return (
        <>
            <div>
                <h2>Detalles de la Cita</h2>
                <p><strong>ID:</strong> {cita.id}</p>
                <p><strong>Doctor:</strong> {cita.doctor}</p>
                <p><strong>Paciente:</strong> {cita.paciente}</p>
                <p><strong>Fecha:</strong> {cita.fecha}</p>
                <p><strong>Hora:</strong> {cita.hora}</p>
                <p><strong>Motivo:</strong> {cita.motivo}</p>
            </div>
        </>
    )
}
