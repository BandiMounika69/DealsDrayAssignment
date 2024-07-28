import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate('/')} className='border border-slate-300 p-1 rounded-2xl bg-sky-700 w-[70px] transtion-all duration-500 hover:scale-105 cursor-pointer'>
      <IoIosArrowRoundBack className='text-white font-bold text-3xl mx-auto'/>
    </div>
  )
}

export default BackButton
