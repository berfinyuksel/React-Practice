import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(()=> {
    console.log("working every time");
  })

  useEffect(() => {
    console.log("working only in first time rendered");
  }, [])

  useEffect(() => {
    console.log("working when it is first time rendered working when firstName changes");
  }, [firstName])

  useEffect(() => {
    console.log("working when it is first time rendered and when the state of firstname OR lastName changes");
  }, [firstName,lastName])
  
  return (
    <>
     <div><button onClick={() => setFirstName("Berfin")}>Change Name</button></div>
     <div><button onClick={() => setLastName("Yüksel")}>Change Surname</button></div>
    </>
  )
}

export default App
