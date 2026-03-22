import React from "react";

export const RestartButton = ({ onRestart }) => (
    <button onClick={onRestart} style={{ marginTop: "20px" }}>
        Reiniciar Juego
    </button>
);

