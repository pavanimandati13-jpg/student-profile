function Student(props) {
  return (
    <div>
      <h1>Student Profile</h1>
      <p>Name: {props.name}</p>
      <p>Roll No: {props.rollNo}</p>
      <p>Course: {props.course}</p>
      <p>College: {props.college}</p>
    </div>
  )
}

export default Student