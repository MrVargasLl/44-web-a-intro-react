import { useReducer, useState } from "react"

const estadoInicial = [
    
]

const tareaReducer = (state = estadoInicial, action = {}) => {

    switch (action.type) {

        case "Agregar tarea":
            return [...state, action.payload]

        case "Eliminar tarea":
            return state.filter(tarea => tarea.id != action.payload)

    }

}


export const UseReducer = () => {

    const [state, dispatch] = useReducer(tareaReducer, estadoInicial)
    const [input, setInput] = useState("")

    const handleAgregar = () => {
        if (input.trim() === "") return

        const nuevaTarea = {
            id: new Date().getTime(),
            tarea: input,
            finalizada: false
        }

        dispatch({
            type: "Agregar tarea",
            payload: nuevaTarea
        })

        setInput("")

    }

    return (
        <>
            <h2>Lista de tareas</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
            }}><input
                type="text"
                placeholder="Nueva tarea"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button onClick={handleAgregar}>Agregar</button>
</form>
            
            <ul>
                {
                    state.map(tarea => (
                        <li key={tarea.id}>
                            {tarea.tarea}
                            <button
                                onClick={() => {
                                    dispatch({
                                        type: "Eliminar tarea",
                                        payload: tarea.id
                                    })
                                }}
                            >
                                X
                            </button>
                        </li>
                    ))
                }
            </ul>

        </>
    )
}