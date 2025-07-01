import './App.css'
import Header from './components/Header'
import Course from './components/Course'
import { courses } from './Data'  

function App() {

  return (
    <>
    <div>
       <Header />
      { //JSX icinde liste render etmek icin map kullanilmali forEach olmaz.
         courses?.map((course) => (
         <Course key={course.id} course={course}/>
        ))
      } 
    </div>
    </>
  )
}

export default App
