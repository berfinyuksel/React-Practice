import { useState } from 'react'
import './App.css'

function App() {
  const [exam1, setExam1] = useState(0);
  const [exam2, setExam2] = useState(0);
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const sum = () => {
    debugger;
    return exam1 + exam2;
  }

  const calculateAverage = () => {
    const avg = sum() / 2;
    print(avg);
    setShowResult(true);
  }

  const print = (result) => {
    console.log(`The average is: ${result}`);
    setResult(result);
  }

  return (
    <>
      <div>
        <input type='number' value={exam1} onChange={(e) => setExam1(Number(e.target.value))} />
      </div>
      <div>
        <input type='number' value={exam2} onChange={(e) => setExam2(Number(e.target.value))} />
      </div>
      <div>
        <button onClick={calculateAverage}>Calculate Average</button>
      </div>
      {showResult && (
        <div>
          <h2> Result: {result}</h2>
        </div>
      )}
    </>
    //we put after AND parentheses to avoid the error
  )
}

export default App
