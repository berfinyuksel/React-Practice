// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let a = 10;
  let vize = 20;
  let final = 30;
  let isimler = ["ahmet", "begüm", "caner", "deniz", "elif"];
  return (
    <>
      <div>Test: {a}</div>
      <div> 
        {(vize+ final) / 2 > 50 ? <p>Gectiniz</p> : <p>Kaldiniz</p>}  
      </div>
      <div>
        {
          isimler.map((isim,index) => (
            <div style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "white",
              padding: "10px",
              margin: "5px",
              backgroundColor: isim === "ahmet" ? "red" : isim === "begüm" ? "blue" : isim === "caner" ? "green" : isim === "deniz" ? "orange" : "purple",
              border: "1px solid black"
            }} 
            key={index}>{isim}</div>
          )
        )
        }
      </div>
    </>
    
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
