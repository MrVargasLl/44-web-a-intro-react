/* import { useContext } from "react";
import { Personajes } from "./components/Personajes"
import { UserContext } from "./context/UserContext"
export const App = () => {

    const { nombre } = useContext(UserContext);

  return (
    <div>



      <Personajes />

    </div>
  )
} */

import React, { useState, useEffect, useMemo } from 'react';
import Planeta from './components/Planeta';
import './App.css';

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState('En órbita');
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

  useEffect(() => {
  console.log("¡El panel está listo!"); // Montaje

  const intervalo = setInterval(() => {
    setDistancia((prev) => prev + 10);
    // Solo restamos si combustible es mayor que cero
    if (combustible > 0) {
      setCombustible((prev) => prev - 1);
    }
  }, 1000);

  return () => {
    clearInterval(intervalo); // Desmontaje
    console.log("El panel se ha apagado."); // Desmontaje
  };
}, []);

  useEffect(() => {
    console.log("¡Combustible actualizado!"); // Actualización
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  const handleAterrizar = () => {
    setEstadoNave('Aterrizando');
    setPlanetasVisitados([...planetasVisitados, 'Nuevo Planeta']);
  };

  return (
    <div className="contenedor">
      <h1>Panel de Control</h1>
      <p>Distancia: {distancia}</p>
      <p>Combustible: {combustible}</p>
      <p>{mensajeEstado}</p>
      <button onClick={handleAterrizar}>Aterrizar</button>
      <h2>Planetas Visitados</h2>
      {planetasVisitados.map((planeta, index) => (
        <Planeta key={index} nombre={planeta} />
      ))}
    </div>
  );
}

export default App;