import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function UserSignup() {
  const [userName,setUserName] = useState('')
  const [userEmail,setUserEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    const data = {
      userName:userName,
      userEmail:userEmail,
      password:password
    }
    axios.post('http://localhost:3000/user/create',data).then(res=>{
      console.log(res)
      navigate('/')
    },[])
  }
  return (
    <div className='flex justify-center items-center h-[100vh] bg-employee-home'>
      <form onSubmit={(e)=>handleSubmit(e)} className='flex flex-col justify-start gap-y-2 p-8 rounded-md w-[460px] mb-6 mx-auto border-2 bg-gray-300 shadow-white transition-all duration-500 hover:scale-105'>
      <h1 className='text-3xl mb-5 font-bold '>Create Account</h1>
      <label className='font-bold'>User Name</label>
      <input className='border-2 border-slate-400 w-[400px] p-2 rounded-xl' type='text' placeholder='Ex: user@123' onChange={(e) => setUserName(e.target.value)} />
      <label className='font-bold'>Email</label>
      <input className='border-2 border-slate-400 w-[400px] p-2 rounded-xl' type='email' placeholder='Ex: user@gmail.com' onChange={(e) => setUserEmail(e.target.value)} />
      <label className='font-bold'>Password</label>
      <input className='border-2 border-slate-400 w-[400px] p-2 rounded-xl' type='password' placeholder='Ex: d@f#Exa4' onChange={(e) => setPassword(e.target.value)} />
      <button type='submit' className='p-2 text-center text-white w-[400px] font-bold bg-sky-950 rounded-xl mt-2  transition-all duration-500 hover:scale-110'>Submit</button>
      </form>
    </div>
  )
}

export default UserSignup
