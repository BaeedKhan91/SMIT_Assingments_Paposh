import Grade from "./Grade"

function Fail( props) {
    const {marks , name , present} = props
    return (
        <>
            <h1 style={{ color: "red" }}>Fail </h1>
            <p> {name.toUpperCase()} Your Marks are {marks} </p>
            <p>{present ? "Availaible":"Not Availaible"}</p>
            {<Grade marks={marks}/>}
        </>
    )
}

export default Fail