import { useEffect } from "react";

export const CambiarFondo = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    console.log("Suscribiendo evento");
    return () => {
      document.body.style.backgroundColor = "blueviolet";
      console.log("Limpiando evento");
    };
  }, []);
  return <p>Este componente cambia el fondo del sitio</p>;
};
