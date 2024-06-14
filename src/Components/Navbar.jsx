import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../services/operations/authAPI';
import { RxHamburgerMenu } from 'react-icons/rx';

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
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  const [changeState, setChangeState] = useState(false);
  function handleMenuClick() {
    setChangeState((prev) => !prev);
  }
  return (
    <div
      className={`flex h-14 items-center md:justify-center justify-between border-b-[1px] border-b-slate-700 ${
        changeState ? 'mb-40' : ""
      }
      transition-all duration-200`}
    >
      <div className="flex  md:w-11/12 max-w-maxContent items-center justify-between">
        <Link to="/">
          <h1 className="text-white font-bold text-2xl border-2 border-yellow-300 rounded-lg p-1">
            Learn<span className="text-yellow-400">Tec</span>
          </h1>
        </Link>

        <div className="hidden md:block">
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
        <div className=" gap-x-5 hidden md:flex">
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
      {/* mobile view */}
      <div className="flex flex-col md:hidden">
        <div
          className="relative px-5 cursor-pointer text-white"
          onClick={handleMenuClick}
        >
          <RxHamburgerMenu size={40} />
        </div>
        <div className="absolute pb-8 top-14 w-screen left-0">
          {changeState && (
            <div className="flex flex-col gap-4 items-center text-center w-screen bg-black pb-4 bg-opacity-[95%] ">
              <div className="">
                <ul className=" gap-x-6 text-white">
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
              <div className="flex gap-x-8 ">
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
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
