import { useState } from "react";



export const Header = () => {
  return (
    <div>Header</div>
  )
}


export const Game = () => {
  const targetNumber = useState(() => Math.floor(Math.random() * 100) + 1);
  const [userGuess, setUserGuess] = useState(0);
  const [message, setMessage] = useState(0);
  
  const handleGuess = () => {
    const guess = parseInt(userGuess, 10);
    if (guess === targetNumber) {
      setMessage('¡Correcto!');
    } else if (guess < targetNumber) {
      setMessage('El número es mayor');
    } else {
      setMessage('El número es menor');
    }
  }}