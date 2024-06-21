// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom';
// import { logout } from '../services/operations/authAPI';
// import { RxHamburgerMenu } from 'react-icons/rx';

// export const NavbarLinks = [
//   {
//     title: 'Home',
//     path: '/',
//   },
//   {
//     title: 'About Us',
//     path: '/about',
//   },
//   {
//     title: 'Courses',
//     path: '/Courses',
//   },
//   {
//     title: 'Contact Us',
//     path: '/contact-us',
//   },
// ];

// function Navbar() {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { token } = useSelector((state) => state.auth);
//   const {user} = useSelector(state => state.profile)
//   const carts = useSelector(state => state.carts)
//   const matchRoute = (route) => {
//     return matchPath({ path: route }, location.pathname);
//   };
//   const [changeState, setChangeState] = useState(false);
//   function handleMenuClick() {
//     setChangeState((prev) => !prev);
//   }
//   return (
//     <div
//       className={`flex h-14 items-center md:justify-center justify-between border-b-[1px] border-b-slate-700 md:mb-0 ${
//         changeState ? 'mb-40' : "md:mb-0"
//       }
//       transition-all duration-200`}
//     >
//       <div className="flex  md:w-11/12 max-w-maxContent items-center justify-between">
//         <Link to="/">
//           <h1 className="text-white font-bold text-2xl border-2 border-yellow-300 rounded-lg p-1">
//             Learn<span className="text-yellow-400">Tec</span>
//           </h1>
//         </Link>

//         <div className="hidden md:block">
//           <ul className="flex gap-x-6 text-white">
//             {NavbarLinks.map((link, index) => (
//               <li key={index}>
//                 <Link to={link.path}>
//                   <p
//                     className={`${
//                       matchRoute(link?.path)
//                         ? ' text-yellow-300 border-b-4 border-amber-300 '
//                         : 'text-white'
//                     }`}
//                   >
//                     {link.title}
//                   </p>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className=" gap-x-5 hidden md:flex">
//           {token === null && (
//             <Link to="/login">
//               <button className="rounded-[8px] mx-1 md:mx-0 border border-slate-700 bg-slate-800 px-[12px] py-[8px] text-slate-100">
//                 Log in
//               </button>
//             </Link>
//           )}
//           {token === null && (
//             <Link to="/signup">
//               <button className="rounded-[8px] border border-slate-700 bg-slate-800 px-[12px] py-[8px] text-slate-100">
//                 Sign up
//               </button>
//             </Link>
//           )}
//           {token !== null && (
//             <Link to="/cart">
//               <div className='relative'>
//               <button className="rounded-[8px] border border-slate-700 bg-slate-800 px-[12px] py-[8px] text-slate-100">
//                 Cart
//               </button>
// {carts.length > 0 && <div className='absolute -top-2 left-10 bg-green-600 rounded-full w-6 flex justify-center text-white font-semibold'>{carts.length}</div>}
//               </div>
              
//             </Link>
//           )}
//            {token !== null && (<Link to="/dashboard">
//                     <button className="rounded-[8px] border border-slate-700 bg-slate-800 px-[12px] py-[8px] text-slate-100">
//                       Dashboard
//                     </button>
//                   </Link>)
//                 }
//           {token !== null && (
//             <Link to="/login">
//               <button
//                 className="rounded-[8px] border border-slate-700 bg-slate-800 px-[12px] py-[8px] text-slate-100"
//                 onClick={() => {
//                   dispatch(logout(navigate));
//                 }}
//               >
//                 Logout
//               </button>
//             </Link>
//           )}
//         </div>
//       </div>
//       {/* mobile view */}
//       <div className="flex flex-col md:hidden">
//         <div
//           className="relative px-5 cursor-pointer text-white"
//           onClick={handleMenuClick}
//         >
//           <RxHamburgerMenu size={40} />
//         </div>
//         <div className="absolute pb-8 top-14 w-screen left-0">
//           {changeState && (
//             <div className="flex flex-col gap-4 items-center text-center w-screen bg-black pb-4 bg-opacity-[95%] ">
//               <div className="">
//                 <ul className=" gap-x-6 text-white">
//                   {NavbarLinks.map((link, index) => (
//                     <li key={index}>
//                       <Link to={link.path}>
//                         <p
//                           className={`${
//                             matchRoute(link?.path)
//                               ? ' text-yellow-300 border-b-4 border-amber-300 '
//                               : 'text-white'
//                           }`}
//                         >
//                           {link.title}
//                         </p>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="flex gap-x-8 ">
//                 {token === null && (
//                   <Link to="/login">
//                     <button className="rounded-[8px] mx-1 md:mx-0 border border-slate-700 bg-slate-800 px-[12px] py-[8px] text-slate-100">
//                       Log in
//                     </button>
//                   </Link>
//                 )}
//                 {token === null && (
//                   <Link to="/signup">
//                     <button className="rounded-[8px] border border-slate-700 bg-slate-800 px-[12px] py-[8px] text-slate-100">
//                       Sign up
//                     </button>
//                   </Link>
//                 )}
//                 {token !== null && (
//                   <Link to="/cart">
//                     <button className="rounded-[8px] border border-slate-700 bg-slate-800 px-[12px] py-[8px] text-slate-100">
//                       Cart
//                     </button>
//                   </Link>
//                 )}
//                 {token !== null && (<Link to="/dashboard">
//                     <button className="rounded-[8px] border border-slate-700 bg-slate-800 px-[12px] py-[8px] text-slate-100">
//                       Dashboard
//                     </button>
//                   </Link>)
//                 }
//                 {token !== null && (
//                   <Link to="/login">
//                     <button
//                       className="rounded-[8px] border border-slate-700 bg-slate-800 px-[12px] py-[8px] text-slate-100"
//                       onClick={() => {
//                         dispatch(logout(navigate));
//                       }}
//                     >
//                       Logout
//                     </button>
//                   </Link>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
      
//       </div>
//     </div>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../services/operations/authAPI';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaTimes } from 'react-icons/fa';

export const NavbarLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About Us',
    path: '/about',
  },
  {
    title: 'Courses',
    path: '/Courses',
  },
  {
    title: 'Contact Us',
    path: '/contact-us',
  },
];

function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const carts = useSelector((state) => state.carts);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const [changeState, setChangeState] = useState(false);

  function handleMenuClick() {
    setChangeState((prev) => !prev);
  }

  return (
    <div className={`flex items-center  border-b-2 border-b-gray-700 ${changeState ? 'mb-40' : 'md:mb-0'} transition-all duration-200`}>
      <div className="flex w-full max-w-7xl items-center justify-around mx-auto px-4">
        <Link to="/">
          <h1 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Learn<span className="text-yellow-300">Tec</span>
          </h1>
        </Link>

        <div className="hidden md:block">
          <ul className="flex gap-8 text-lg">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>
                  <p className={`hover:text-yellow-300 transition-colors duration-200 ${matchRoute(link?.path) ? 'text-yellow-300 border-b-2 border-yellow-300' : 'text-white'}`}>
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {token === null && (
            <Link to="/login">
              <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors duration-200">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && (
            <Link to="/cart">
              <div className="relative">
                <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  Cart
                </button>
                {carts.length > 0 && (
                  <div className="absolute -top-0 -right-2 bg-red-600 border-2 rounded-full w-5 h-5 flex items-center text-xs justify-center text-white font-bold">
                    {carts.length}
                  </div>
                )}
              </div>
            </Link>
          )}
          {token !== null && (
            <Link to="/dashboard">
              <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
                Dashboard
              </button>
            </Link>
          )}
          {token !== null && (
            <button
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
              onClick={() => {
                dispatch(logout(navigate));
              }}
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile view */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white"
            onClick={handleMenuClick}
          >
            {changeState ? <FaTimes size={28} /> : <RxHamburgerMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {changeState && (
        <div className="absolute top-14 left-0 w-full bg-black bg-opacity-95 text-white z-10">
          <ul className="flex flex-col items-center space-y-6 py-6">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>
                  <p
                    className={`hover:text-yellow-300 transition-colors duration-200 ${matchRoute(link?.path) ? 'text-yellow-300 border-b-2 border-yellow-300' : 'text-white'}`}
                  >
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center space-y-4 mt-4">
            {token === null && (
              <Link to="/login">
                <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  Log in
                </button>
              </Link>
            )}
            {token === null && (
              <Link to="/signup">
                <button className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors duration-200">
                  Sign up
                </button>
              </Link>
            )}
            {token !== null && (
              <Link to="/cart">
                <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  Cart
                </button>
              </Link>
            )}
            {token !== null && (
              <Link to="/dashboard">
                <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  Dashboard
                </button>
              </Link>
            )}
            {token !== null && (
              <button
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                onClick={() => {
                  dispatch(logout(navigate));
                }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
