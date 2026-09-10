import { Router , Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import CourseDetails from "./pages/CourseDetails"
import Students from "./pages/Students"
import Register from "./pages/Register"
import About from "./pages/About"
import Contect from "./pages/Contect"
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Navbar />
      <main className='main-contect'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/courses' element={<Courses />}/>
          <Route path='/courses/:id' element={<CourseDetails /> }/>
          <Route path='/students' element={<Students />}/>
          <Route path='/register' element={<Register />}/>
          <Route  path='/about' element={<About />}/>
          <Route  path='/contect' element={<Contect />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
