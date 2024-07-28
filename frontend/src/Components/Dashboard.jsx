import React from 'react'
import { MdOutlineHome } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Store from '../store';
import { useNavigate } from 'react-router-dom';

function Dashboard(props) {
    const navigate = useNavigate()
    const handleButton = (e)=>{
        e.preventDefault()
        Store[0]=''
        Store[1]=''
        Store[2]=0
        navigate('/')
    }
    return (
        <div className='flex flex-col justify-center items-center h-[100vh]'>
            <div className='fixed flex justify-between items-center py-2 px-6 top-6 border-2 border-slate-600 left-5 right-5 rounded-xl shadow-lg bg-gray-900'>
                <h1 className='text-2xl text-white'>Logo</h1>
                <div className='flex items-center sm:gap-x-2 md:gap-x-8'>
                    <Link to={'/'} className='flex items-center gap-x-1 text-lg font-semibold transition-all duration-200 text-white hover:scale-110 '><MdOutlineHome className='font-bold text-xl' />Home</Link>
                    <Link to={'/employee'} className='flex items-center gap-x-1 text-lg font-semibold transition-all duration-200 text-white hover:scale-110'><IoPersonAddOutline className='font-bold text-xl' />Employee List</Link>
                    <h1 className='text-lg text-white'>{Store[0]}</h1>
                    <button onClick={(e)=>handleButton(e)} className='text-lg text-white border-2 p-1 rounded-lg'>Logout</button>
                </div>
            </div>
            <h1 className='text-white'>Welcome to Dashboard</h1>
        </div>
    )
}

export default Dashboard
