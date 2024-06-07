import React from 'react'
import SideBar from '../Components/core/Common/SideBar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Dashboard() {
  const { user} = useSelector(state => state.profile)
  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">

        <SideBar/>
     
        <div className='h-[100vh] flex-1 overflow-auto'>
            <div className='mx-auto w-11/12 max-w-[1000px] py-5 md:py-10'>
<Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard