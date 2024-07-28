import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Dashboard from '../Components/Dashboard';
import Store from '../store';

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (Store[2] === 1) {
      setSignedIn(true);
    }
    else{
      setSignedIn(false)
    }
  }, []);

  const handleAuth = (e) => {
    e.preventDefault();
    const data = {
      userName: username,
      password: password
    };

    axios.post('http://localhost:3000/user', data)
      .then((res) => {
        console.log(res);
        if (res.data.message === 'success') {
          Store[2] = 1;
          Store[0] = username;
          Store[1] = password;
          setSignedIn(true);
          alert("You have successfully signed in");
        } else if (res.data.message === 'failure') {
          alert("user not found");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while signing in");
      });
  };

  return (
    <div className='h-[100vh] bg-employee-home overflow-y-scroll no-scrollbar scroll-smooth'>
      {signedIn ? (
        <Dashboard username={username} password={password} />
      ) : (
        <div className='flex flex-col h-[100vh] justify-center items-center'>
          <form onSubmit={handleAuth} className='flex flex-col justify-start gap-y-2 p-8 rounded-md w-[460px] mb-6 mx-auto border-2 bg-gray-300 shadow-white transition-all duration-500 hover:scale-105'>
            <h1 className='text-3xl mb-5 font-bold'>Log In</h1>
            <label className='font-bold'>User Name</label>
            <input className='border-2 border-slate-400 w-[400px] p-2 rounded-xl' type='text' placeholder='Enter username..' onChange={(e) => setUsername(e.target.value)} />
            <label className='font-bold'>Enter Password</label>
            <input className='border-2 border-slate-400 w-[400px] p-2 rounded-xl' type='password' placeholder='Enter password..' onChange={(e) => setPassword(e.target.value)} />
            <button type='submit' className='p-2 text-center text-white w-[400px] font-bold bg-sky-950 rounded-xl mt-2  transition-all duration-500 hover:scale-95'>Submit</button>
            <div className='flex gap-x-1 items-center'>
              <h3>Do you have account?</h3>
              <Link to={'/user/create'} className='flex items-center gap-x-1 text-sm font-semibold transition-all duration-200 text-white hover:scale-110 border-1 text-center p-2 rounded-2xl bg-blue-800'>Create Account</Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Home;
