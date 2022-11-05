import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <div className='border-b border-slate-800/70'>
      <div className=' custom-container '>
        {/* small screen logo */}
        <div className='flex sm:hidden items-center justify-center'>
          <div className='flex  items-baseline gap-3'>
            <span className=' rounded-sm bg-slate-800 border border-slate-700/80 flex items-center justify-center font-bold text-2xl h-8 w-8 text-slate-50'>
              C
            </span>
            <span className='font-bold text-2xl text-slate-50'>
              codas.
            </span>
          </div>
        </div>

        {/* container */}
        <div className=' fixed px-6 right-1/2 translate-x-1/2 sm:translate-x-0  sm:px-0 sm:py-0 rounded-full sm:rounded-none bg-transparent backdrop-blur-lg border border-slate-800 sm:border-none sm:bg-transparent  bottom-12  sm:static sm:flex sm:items-center sm:justify-between '>
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
              <input
                type='search'
                className='bg-white w-20'
              />
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
                    ? "py-6 border-b px-2 border-sky-500/70 "
                    : "inline-block px-2 py-6 "
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
                    ? "py-6 border-b px-2 border-sky-500/70 "
                    : "inline-block px-2 py-6 "
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
                    ? "py-6 px-2 border-b border-sky-500/70"
                    : "inline-block  py-6  px-2"
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
