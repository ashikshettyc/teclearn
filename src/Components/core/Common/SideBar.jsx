import React from 'react'
import { ACCOUNT_TYPE } from '../../../utils/constants'

import SidebarLink from './SidebarLink'
import { useSelector } from 'react-redux'

const sidebar= [
  
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: ACCOUNT_TYPE.Instructor,
    icon: "VscDashboard",
  },
  {
    id: 2,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: ACCOUNT_TYPE.Instructor,
    icon: "VscVm",
  },
  {
    id: 3,
    name: "Add Course",
    path: "/dashboard/add-course",
    type: ACCOUNT_TYPE.Instructor,
    icon: "VscAdd",
  },
  {
    id: 4,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscMortarBoard",
  },
  {
    id: 5,
    name: "Cart",
    path: "/cart",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscArchive",
  },
]


function SideBar() {
  const {user} = useSelector(state => state.profile)
  
const filteredSideBar= sidebar.filter(link => link.type === user.accountType)
  return (
         <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-slate-700 bg-slate-800 py-5 md:py-10">
        <div className="flex flex-col">
    
          {filteredSideBar.map((link) => {
            
            // if (link.type && users?.accountType !== link.type) return null
            return (
              <div key={link.id}>
              {/* {console.log(users)} */}
               <SidebarLink key={link.id} link={link} iconName={link.icon} />
              </div>
             
            )
          })}
        </div>
    
    </div>
  )
}

export default SideBar