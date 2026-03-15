import { useEffect, useState } from "react";

export const CambiarApariencia = () => {

    const [tamano, setTamano] = useState("32px");

    useEffect(() => {

        setTamano("60px");

        return () => {
            console.log("Componente desmontado");
        };

    }, []);

    return (
        <h1
            style={{
                fontSize: tamano,
                backgroundColor: "lightblue"
            }}
        >
            React
        </h1>
    );
};