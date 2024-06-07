import React from 'react'
import { NavLink, matchPath, useLocation } from 'react-router-dom'

function SidebarLink({link, iconName}) {
    const location = useLocation()
    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname)
    }
  return (
    <NavLink
    to={link.path}
    className={`relative px-8 py-2 text-sm font-medium duration-200 transition-all`}
>
<span
        className={`absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-50 ${
          matchRoute(link.path) ? "opacity-100" : "opacity-0"
        }`}
      ></span>
      <div className="flex items-center gap-x-2">
        {/* Icon Goes Here */}
        {/* <Icon className="text-lg" /> */}
        <span>{link.name}</span>
      </div>
    </NavLink>
   
  )
}

export default SidebarLink


// className={`relative px-8 py-2 text-sm font-medium ${
//   matchPath(link.path) ?
//   " bg-yellow-900 text-yellow-400" : "bg-opacity-0 text-slate-600"
//       } duration-200 transition-all`}