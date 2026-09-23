import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> THIS IS MY FIRST REACT PAGE...</h1>
    <h3> React we write npm create vite@latest myapp or whatever u want to name it</h3>
    <h1>Running successfully</h1>
    </>
  
  )
}

function App(){
  const [name ,  setName ] = useState("Alex");

  return(
    <>
      <p>{name}</p>
      <button onclick = {() => setName("Aron")}>Change Name</button>

    </>
  )
}


function Student(){
  const [student, setStudent] = useState({id:1, name:"David", dept:"SD"})
  const newstudent = {id:2, name :"Thomas", dept :"21", course:"Maths"}
const course ="web programming"
  return(
    <>
      <h2>Student info</h2>
      <p>id: {student.id}</p>
      <p>id: {student.name}</p>
      <p>id: {student.dept}</p>
      <p>course: {student.course}</p>
      <button type ="button" onclick ={()=>{setStudent({...student, course :course})}}>Add Course</button>
      <button type ="button" onclick ={()=>{setStudent([...student, newStudent])}}>Add new Student</button>
    </>
  )

}
export default Student;
