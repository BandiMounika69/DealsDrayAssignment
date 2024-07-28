import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


function DeleteEmployee() {
  const navigate = useNavigate()
  const { id } = useParams()
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/employee/delete/${id}`).then(() => {
      navigate('/employee')
    }).catch((error) => {
      alert('An error happend. Please check the console')
    })
  }
  return (
    <div className='bg-employee-home h-[100vh] p-4'>
      <h1 className='text-3xl my-4 text-white'>Delete Employee</h1>
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl text-white'>Are you sure you want to delete the employee entity?</h3>
        <button className='bg-red-500 rounded-xl p-4 m-8 text-white' onClick={()=>handleDelete()}>Delete</button>
      </div>
    </div>
  )
}

export default DeleteEmployee
