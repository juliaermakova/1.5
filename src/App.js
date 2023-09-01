const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 11 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }

// h1 HEADER: kurssin nimi 
// p CONTENT: osat ja niiden tehtävämäärät
// p TOTAL: tehtävien yhteismäärä
return (
  <div>
    <h1>{course.name}</h1>        
    <p>{course.parts[0].name} {course.parts[0].exercises}</p>
    <p>{course.parts[1].name} {course.parts[1].exercises}</p>
    <p>{course.parts[2].name} {course.parts[2].exercises}</p>
    <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
  </div>
  )
}
export default App