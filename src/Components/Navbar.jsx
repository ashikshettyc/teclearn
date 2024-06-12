import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../services/operations/authAPI';

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
    path: '/contact',
  },
  
];

function Navbar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-slate-700
      transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <Link to="/">
          <h1 className="text-white font-bold text-2xl border-2 border-yellow-300 rounded-lg p-1">
            Ashik<span className="text-yellow-400">Tec</span>
          </h1>
        </Link>

        <div className="">
          <ul className="flex gap-x-6 text-white">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>
                  <p
                    className={`${
                      matchRoute(link?.path)
                        ? ' text-yellow-300 border-b-4 border-amber-300 '
                        : 'text-white'
                    }`}
                  >
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-x-5">
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] mx-1 md:mx-0 border border-slate-700 bg-slate-800 px-[12px] py-[8px] text-slate-100">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-slate-700 bg-slate-800 px-[12px] py-[8px] text-slate-100">
                Sign up
              </button>
            </Link>
          )}
           {token !== null && (
            <Link to="/cart">
              <button className="rounded-[8px] border border-slate-700 bg-slate-800 px-[12px] py-[8px] text-slate-100">
                Cart
              </button>
              
            </Link>
          )}
          {token !== null && (
            <Link to="/dashboard">
              <button className="rounded-[8px] border border-slate-700 bg-slate-800 px-[12px] py-[8px] text-slate-100">
                Dashboard
              </button>

            </Link>
          )}
          {token !== null && (
            <Link to="/login">
              <button
                className="rounded-[8px] border border-slate-700 bg-slate-800 px-[12px] py-[8px] text-slate-100"
                onClick={() => {
                  dispatch(logout(navigate));
                }}
              >
                Logout
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
