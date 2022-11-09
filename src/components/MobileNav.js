import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Searchbar from "./Searchbar";
import { NavLink } from "react-router-dom";
const MobileNav = ({ setActive }) => {
  const itemActive =
    "py-3  w-full inline-block px-4 rounded-lg bg-slate-700/40 uppercase text-sm font-medium text-white ";

  const itemNormal =
    "inline-block transition duration-200 hover:bg-slate-700/40 rounded-lg uppercase w-full text-sm font-medium hover:text-white py-3 px-4";
  return (
    <div className='fixed inset-y-0 translate-x-0 md:translate-x-full right-0 w-64 bg-slate-800/70 flex md:hidden transform transition-all duration-400 ease-in-out backdrop-blur-lg z-[9999]'>
      <div className=' w-full'>
        <XMarkIcon
          className='h-7 w-7 mt-6 mx-8 cursor-pointer ml-auto text-white'
          onClick={() => setActive(false)}
        />

        <div className='pt-6 px-4  space-y-8'>
          <div className=''>
            <Searchbar mobileNav />
          </div>
          <ul className='w-full flex flex-col space-y-2'>
            <li>
              <NavLink
                end
                to={"/"}
                className={({ isActive }) =>
                  isActive ? itemActive : itemNormal
                }
                onClick={() => setActive(false)}
              >
                {" "}
                home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/advocates"}
                className={({ isActive }) =>
                  isActive ? itemActive : itemNormal
                }
                onClick={() => setActive(false)}
              >
                {" "}
                advocates{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/companies"}
                className={({ isActive }) =>
                  isActive ? itemActive : itemNormal
                }
                onClick={() => setActive(false)}
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

export default MobileNav;
