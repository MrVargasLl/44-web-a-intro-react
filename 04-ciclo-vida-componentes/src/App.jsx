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
} *//* 

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

export default App; */

import React, { useState, useEffect, useMemo } from "react";
import Planeta from "./components/Planeta";
import FormularioPlaneta from "./components/FormularioPlaneta";
import ListaPlanetas from "./components/ListaPlanetas";
import "./App.css";

function App() {

  // PANEL DE CONTROL
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

  // BITÁCORA
  const [planetas, setPlanetas] = useState(
    JSON.parse(localStorage.getItem("planetas")) || []
  );

  const [planetaSeleccionado, setPlanetaSeleccionado] = useState(null);

  // MONTAJE / DESMONTAJE (simulación de vuelo)
  useEffect(() => {
    console.log("¡El panel está listo!");

    const intervalo = setInterval(() => {
      setDistancia((prev) => prev + 10);

      setCombustible((prev) => {
        if (prev > 0) {
          return prev - 1;
        }
        return 0;
      });

    }, 1000);

    return () => {
      clearInterval(intervalo);
      console.log("El panel se ha apagado.");
    };
  }, []);

  // ACTUALIZACIÓN
  useEffect(() => {
    console.log("¡Combustible actualizado!");
  }, [combustible]);

  // MEMO
  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  // ATERRIZAJE
  const handleAterrizar = () => {
    setEstadoNave("Aterrizando");
    setPlanetasVisitados([...planetasVisitados, "Nuevo Planeta - Actualizar Bitacora"]);
    // recargar combustible al aterrizar
    setCombustible(100);
  };

  // GUARDAR EN LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("planetas", JSON.stringify(planetas));
  }, [planetas]);

  // AGREGAR PLANETA
  const agregarPlaneta = (nuevoPlaneta) => {
    setPlanetas([...planetas, nuevoPlaneta]);
  };

  // ELIMINAR PLANETA
  const eliminarPlaneta = (index) => {
    const nuevosPlanetas = [...planetas];
    nuevosPlanetas.splice(index, 1);
    setPlanetas(nuevosPlanetas);
  };

  const editarPlaneta = (index, planetaActualizado) => {

    const nuevosPlanetas = [...planetas];

    nuevosPlanetas[index] = planetaActualizado;

    setPlanetas(nuevosPlanetas);

  };

  return (
    <div className="contenedor">

      <h1>Panel de Control</h1>

      <p>Distancia: {distancia}</p>
      <p>Combustible: {combustible}</p>
      <p>{mensajeEstado}</p>

      <button onClick={handleAterrizar}>
        Aterrizar
      </button>

      <h2>Planetas Visitados</h2>

      {planetasVisitados.map((planeta, index) => (
        <Planeta key={index} nombre={planeta} />
      ))}

      <hr />

      <h1>Bitácora de Exploración</h1>

      <FormularioPlaneta agregarPlaneta={agregarPlaneta} />

      <ListaPlanetas
        planetas={planetas}
        eliminarPlaneta={eliminarPlaneta}
        editarPlaneta={editarPlaneta}
        setPlanetaSeleccionado={setPlanetaSeleccionado}
      />

      {planetaSeleccionado && (
        <div className="detalle">
          <h2>{planetaSeleccionado.nombre}</h2>
          <p>{planetaSeleccionado.descripcion}</p>

          {planetaSeleccionado.imagen && (
            <img
              src={planetaSeleccionado.imagen}
              alt={planetaSeleccionado.nombre}
              width="200"
            />
          )}
        </div>
      )}

    </div>
  );
}

export default App;