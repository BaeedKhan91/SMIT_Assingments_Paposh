import Grade from "./Grade"

function Pass(props) {
  const { marks, name, present } = props
  return (
    <>
      <h1 style={{ color: "green" }}>Pass</h1>
      <p> {name.toUpperCase()} Your Marks are {marks} </p>
      <p>{present ? "Availaible" : "Not Availaible"}</p>
      {<Grade marks={marks}/>}
    </>
  )
}

export default Pass