import React, { useState, useEffect } from "react";
import {InputNumber} from "../components/InputNumber";
import {Message} from "./Message";
import {RestartButton} from "./RestartButton";

export const Game = () => {
    const [randomNumber, setRandomNumber] = useState(null);
    const [userInput, setUserInput] = useState("");
    const [status, setStatus] = useState(""); // "correct", "higher", "lower"

    // Generar un nuevo número aleatorio
    const generateRandomNumber = () => {
        const number = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(number);
        setUserInput("");
        setStatus("");
        console.log("Número generado:", number); // útil para depuración
    };

    useEffect(() => {
        generateRandomNumber();
    }, []);

    const handleChange = (e) => setUserInput(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const guess = parseInt(userInput, 10);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Ingresa un número válido entre 1 y 100");
            return;
        }

        // Comparar número ingresado con el número aleatorio
        if (guess === randomNumber) {
            setStatus("correct");
        } else if (guess < randomNumber) {
            setStatus("higher");
        } else {
            setStatus("lower");
        }

        setUserInput(""); // Limpiar input para el siguiente intento
    };

    return (
        <div>
            <h1>Adivina el número (1-100)</h1>

            <InputNumber
                value={userInput}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />

            <Message status={status} />

            <RestartButton onRestart={generateRandomNumber} />
        </div>
    );
};

