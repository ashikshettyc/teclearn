import React from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function Template({formtype}) {
  return (
    <div className='flex flex-col w-11/12 items-center pt-24 text-start'>
        <div className='flex flex-col'>
<h2>Welcome you to our signup page</h2>
<p>We invite you to login to our page</p>
{formtype === "login" ? (<LoginForm/>) : (<SignUpForm/>)}
        </div>
        
     
    </div>
  )
}

export default Template