import { useState, useRef } from "react";

function FormularioPlaneta({ agregarPlaneta }) {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState(null);

    const inputImagenRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const nuevoPlaneta = {
            nombre,
            descripcion,
            imagen: imagen ? URL.createObjectURL(imagen) : null
        };

        agregarPlaneta(nuevoPlaneta);

        setNombre("");
        setDescripcion("");
        setImagen(null);

        if (inputImagenRef.current) {
            inputImagenRef.current.value = "";
        }
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Nombre del planeta"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />

            <textarea
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
            />

            <input
                type="file"
                onChange={(e) => setImagen(e.target.files[0])}
                ref={inputImagenRef}
            />

            <button type="submit">Guardar planeta</button>

        </form>
    );
}

export default FormularioPlaneta;