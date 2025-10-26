import Result from "./components/StudentResult/Result"

function App() {
  let students = [
    {
      name: "baeed",
      marks: 60,
      present: true
    },
    // {
    //   name: "ali",
    //   marks: 40,
    //   present: false
    // },
    {
      name: "ahmed",
      marks: 70,
      present: true
    },
    // {
    //   name: "zubair",
    //   marks: 40,
    //   present: false
    // },
    {
      name: "abeer",
      marks: 40,
      present: false
    },
  ]
  return students.map((s ,index) => <div key={index}>
    <Result name={s.name} marks={s.marks} present={s.present} />
    <hr />
  </div>
  )
}

export default App
