import './App.css'
import Login from './Login' // importun adini baska bir sey olarak degistirip import da edebilirsin
import { users } from './Login' //bir componentin icinden bir sey import ederken { } icine koyman gerekir

function App() {

  console.log(users);
  return (
    <div>
      <Login />
   </div>
  )
}

export default App
