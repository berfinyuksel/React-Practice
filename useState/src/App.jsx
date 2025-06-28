import { useState } from 'react'
import './App.css'

function App() {
  const [exam1, setExam1] = useState(0);
  const [exam2, setExam2] = useState(0);

  const sum = () => {
    debugger;
    return exam1 + exam2;
  }

  const calculateAverage = () => {
    const result = sum(exam1, exam2)/2;
    debugger;
    print(result);   
  }

  const print = (result) => {
    debugger;
    console.log(`The average is: ${result}`);
  }




  return (
    <>
      <div><input type='number' value={exam1} onChange={(e) => setExam1( Number(e.target.value))}></input></div>
      <div><input type='number' value={exam2} onChange={(e) => setExam2(Number(e.target.value))}></input></div>
      <div><button onClick={calculateAverage}>Calculate Average</button></div>
    </>
  )
}

export default App
