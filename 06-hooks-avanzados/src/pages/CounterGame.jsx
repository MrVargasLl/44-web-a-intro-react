import { useReducer, useRef, useCallback, useEffect } from "react";

const initialState = { count: 0, history: [] };

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return {
                count: state.count + action.payload,
                history: [
                    ...state.history,
                    `+${action.payload} (Nuevo valor: ${state.count + action.payload})`
                ]
            };
        case "decrement":
            return {
                count: state.count - 1,
                history: [...state.history, `-1 (Nuevo valor: ${state.count - 1})`]
            };
        case "reset":
            return initialState;

        case "undo":
            if (state.history.length === 0) return state;

            const lastAction = state.history[state.history.length - 1];
            let newCount = state.count;

            if (lastAction.startsWith("+")) {
                const value = parseInt(lastAction.split(" ")[0].replace("+", ""));
                newCount = state.count - value;
            } else if (lastAction.startsWith("-1")) {
                newCount = state.count + 1;
            }

            return {
                count: newCount,
                history: state.history.slice(0, -1)
            };

        case "load":
            return action.payload;

        default:
            return state;
    }
}

function CounterGame() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const incrementBtnRef = useRef(null);
    const inputRef = useRef(null);

    // 🔹 Cargar datos al iniciar
    useEffect(() => {
        const savedData = localStorage.getItem("counterState");
        if (savedData) {
            dispatch({ type: "load", payload: JSON.parse(savedData) });
        }
    }, []);

    // 🔹 Guardar en localStorage cuando cambie el estado
    useEffect(() => {
        localStorage.setItem("counterState", JSON.stringify(state));
    }, [state]);

    useEffect(() => {
        if (incrementBtnRef.current) {
            incrementBtnRef.current.focus();
        }
    }, []);

    const handleIncrement = useCallback(() => {
        const value = parseInt(inputRef.current.value) || 1;
        dispatch({ type: "increment", payload: value });
    }, []);

    const handleDecrement = useCallback(() => {
        dispatch({ type: "decrement" });
    }, []);

    const handleReset = useCallback(() => {
        dispatch({ type: "reset" });
    }, []);

    const handleUndo = useCallback(() => {
        dispatch({ type: "undo" });
    }, []);

    return (
        <div>
            <h2>Contador: {state.count}</h2>

            <input
                type="number"
                ref={inputRef}
                placeholder="Cantidad"
                defaultValue={1}
            />

            <br /><br />

            <button ref={incrementBtnRef} onClick={handleIncrement}>
                Incrementar
            </button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleUndo}>Deshacer</button>

            <h3>Historial de cambios:</h3>
            <ul>
                {state.history.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))}
            </ul>
        </div>
    );
}

export default CounterGame;