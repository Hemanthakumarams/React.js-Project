import React from 'react'
import Nav from './components/Nav.jsx'
import './global.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Viewstudents from './components/Viewstudents.jsx'
import Addstudents from './components/Addstudents.jsx'
import { ToastContainer } from 'react-toastify'
import UpdateStudents from './components/UpdateStudents.jsx'

const App = () => {
  return (
    <div>
      <Router>
        <ToastContainer/>
        <Nav/>
        <Routes>
          <Route path='/viewstudents' element={<Viewstudents/>}/>
          <Route path='addstudents' element={<Addstudents/>}/>
          <Route path='updatestudents/:id' element={<UpdateStudents/>}/>
          
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
