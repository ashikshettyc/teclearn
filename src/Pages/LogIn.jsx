import React from 'react'
import Template from '../Components/core/Template'
import { useSelector } from 'react-redux'


function LogIn() {
const {user} = useSelector(state=>state.profile)
  return (
    <div>
        <Template formtype={"login"}/>
    </div>
  )
}

export default LogIn