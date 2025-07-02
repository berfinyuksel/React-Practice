import { useState } from 'react';
import './App.css';

export interface Country {
  name: { common: string };
  capital: string[];
  flags: { png: string };
}

function App() {
  const [searchTerm, setSearchTerm] = useState();
  const [loading, setLoading] = useState();
  return (
    <div className="App">
      <h1>Ülke Arama</h1>
      <input type='text' placeholder='Add country name' value={searchTerm}></input>
    </div>
  );
}

export default App;
