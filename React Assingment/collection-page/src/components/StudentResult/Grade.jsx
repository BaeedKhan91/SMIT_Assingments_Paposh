function Grade(props) {
  const { marks } = props
  if (marks >= 80 && marks < 101) {
    return <h3>Your Grade is A+</h3>
  }
  if (marks >= 70 && marks < 80) {
    return <h3>Your Grade is A</h3>
  }
  if (marks >= 60 && marks < 70) {
    return <h3>Your Grade is B</h3>
  }
  if (marks >= 50 && marks < 60) {
    return <h3>Your Grade is C</h3>
  }
  if (marks >= 0 && marks < 50) {
    return <h3>Your Grade is F</h3>
  }
  else {
    return <h3>Your Marks is not defined</h3>
  }

}

export default Grade