

export const Modal = ({title, content}) => {
return (
    <div style={{
        border:"1px solid gray",
        padding: "20px",
        backgroundColor: "laghtgray"

    }}>
        <h2>{title}</h2>
        <p>{content}</p>
        </div>
)
}
