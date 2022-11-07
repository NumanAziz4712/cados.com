import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Searchbar from "./Searchbar";
const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <div className='  md:border border-slate-800/70'>
      <div className=' custom-container '>
        <div className='flex  sm:hidden items-center justify-center'>
          {/* small screen logo */}
          <div className='flex mt-6 items-baseline gap-3'>
            <span className=' rounded-sm bg-slate-800 border border-slate-700/80 flex items-center justify-center font-bold text-2xl h-8 w-8 text-slate-50'>
              C
            </span>
            <span className='font-bold text-2xl text-slate-50'>
              codas.
            </span>
          </div>
        </div>

        {/* container */}
        <div className=' fixed px-6 right-1/2 translate-x-1/2 sm:translate-x-0 z-[999] sm:px-0 sm:py-0 rounded-full sm:rounded-none bg-slate-700/70 backdrop-blur-lg border border-sky-300/20 sm:border-none sm:bg-transparent  bottom-12  sm:static sm:flex sm:items-center sm:justify-between '>
          {/* ----------------- */}
          {/* logo */}
          {/* ----------------- */}
          <div className='hidden sm:flex items-center gap-3'>
            <span className=' rounded-sm bg-slate-800 border border-slate-700/80 flex items-center justify-center font-bold text-2xl h-8 w-8 text-slate-50'>
              C
            </span>
            <span className='font-bold text-2xl text-slate-50'>
              codas.
            </span>
          </div>

          {/* ----------------- */}
          {/* menu items */}
          {/* ----------------- */}

          <ul className='flex  items-center gap-6'>
            {hidden && (
              // <input
              //   type='search'
              //   className='bg-white w-20'
              // />
              // -----------
              <Searchbar />
            )}
            <span onClick={() => setHidden(!hidden)}>
              search
            </span>
            <li>
              <NavLink
                end
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "sm:py-6 py-3 border-b uppercase text-sm font-medium text-white lg:px-2 border-sky-400/70 "
                    : "inline-block lg:px-2 uppercase text-sm font-medium hover:text-white sm:py-6 py-3 "
                }
              >
                {" "}
                home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/advocates"}
                className={({ isActive }) =>
                  isActive
                    ? "sm:py-6 py-3 border-b lg:px-2 uppercase text-sm font-medium text-white border-sky-400/70 "
                    : "inline-block lg:px-2 uppercase text-sm font-medium hover:text-white sm:py-6 py-3 "
                }
              >
                {" "}
                advocates{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/companies"}
                className={({ isActive }) =>
                  isActive
                    ? "sm:py-6 py-3 lg:px-2 border-b uppercase text-sm font-medium text-white border-sky-400/70"
                    : "inline-block  sm:py-6 py-3 uppercase text-sm font-medium hover:text-white  lg:px-2"
                }
              >
                {" "}
                companies{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
