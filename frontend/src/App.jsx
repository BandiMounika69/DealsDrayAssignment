import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import CreateEmployee from './Pages/CreateEmployee.jsx'
import DeleteEmployee from './Pages/DeleteEmployee.jsx'
import EditEmployee from './Pages/EditEmployee.jsx'
import EmployeeList from './Pages/EmployeeList.jsx'
import UserSignup from './Pages/UserSignup.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/employee/create' element={<CreateEmployee/>}/>
      <Route path='/employee/delete/:id' element={<DeleteEmployee/>}/>
      <Route path='/employee/edit/:id' element={<EditEmployee/>}/>
      <Route path='/employee' element={<EmployeeList/>}/>
      <Route path='/user/create' element={<UserSignup/>}/>
    </Routes>
  )
}

export default App
