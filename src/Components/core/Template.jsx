import React from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function Template({formtype}) {
  return (
    <div className='flex flex-col w-11/12 items-center pt-24 text-start'>
        <div className='flex flex-col'>
<h2 className='text-white text-2xl font-bold py-2 '>Welcome you to our signup page</h2>
<p className='text-xl font-bold bg-gradient-to-r from-sky-600 via-blue-500 to-slate-400 bg-clip-text text-transparent '>We invite you to login to our page</p>
{formtype === "login" ? (<LoginForm/>) : (<SignUpForm/>)}
        </div>
        
     
    </div>
  )
}

export default Template