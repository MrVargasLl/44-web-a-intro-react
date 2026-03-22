import React from "react";

export const Message = ({ status }) => {
    return status === "correct" ? (
        <h2>¡Correcto!</h2>
    ) : status === "higher" ? (
        <h2>El número es mayor</h2>
    ) : status === "lower" ? (
        <h2>El número es menor</h2>
    ) : null;
};

