
export const InputNumber = ({ value, onChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <input
            type="number"
            value={value}
            onChange={onChange}
            placeholder="Ingresa un número"
        />
        <button type="submit">Adivinar</button>
    </form>
);

