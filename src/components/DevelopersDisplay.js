import React from "react";
import { useAllAdvocates } from "../hooks/useAllAdvocates";
import { UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const DevelopersDisplay = () => {
  const { advocates } = useAllAdvocates(
    `https://cados.up.railway.app/advocates`
  );
  const advocate = advocates && advocates.advocates[0];
  // console.log(advocates);
  return (
    <div className='relative mt-6 lg:mt-0 drop-shadow-3xl max-w-3xl rounded-2xl bg-[#0A101F]/60 ring-1 ring-white/10 backdrop-blur-3xl  lg:max-w-auto mx-auto'>
      <div className='h-32 rounded-2xl bg-gradient-to-t from-slate-900 absolute bottom-0 w-full z-50'></div>

      {/* stripe */}
      <div class='absolute  left-20 right-11 -top-px h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0'></div>
      <div class='absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0'></div>
      <div className=' w-full border-b border-slate-700/50 px-12 py-4'>
        <svg
          aria-hidden='true'
          viewBox='0 0 42 10'
          fill='none'
          className='h-2.5 w-auto stroke-slate-500/30'
        >
          <circle cx='5' cy='5' r='4.5'></circle>
          <circle cx='21' cy='5' r='4.5'></circle>
          <circle cx='37' cy='5' r='4.5'></circle>
        </svg>
      </div>
      <div className='relative flex flex-col gap-8   px-12 py-8 '>
        <div className='flex'>
          <div className='h-12 w-12 flex items-center justify-center flex-none rounded-full bg-gradient-to-b from-slate-700 to-slate-700/30'>
            <UserIcon className='h-7 w-7' />
          </div>
          <div className='flex w-full items-center gap-3'>
            <div className='h-[2px] w-full bg-slate-800/60'></div>
            <div className='h-3 w-3 flex-none rounded-full bg-slate-800/80'></div>
            <div className='h-[2px] w-full bg-slate-800/60'></div>
          </div>
          <div className='h-12 w-12 flex items-center justify-center flex-none rounded-full bg-gradient-to-b from-slate-700 to-slate-700/30'>
            <UserIcon className='h-7 w-7' />
          </div>
          <div className='flex w-full items-center gap-3'>
            <div className='h-[2px] w-full bg-slate-800/60'></div>
            <div className='h-3 w-3 flex-none rounded-full bg-slate-800'></div>
            <div className='h-[2px] w-full bg-slate-800/60'></div>
          </div>
          <div className='h-12 w-12 flex items-center justify-center flex-none rounded-full bg-gradient-to-b from-slate-700 to-slate-700/30'>
            <UserIcon className='h-7 w-7' />
          </div>
        </div>
        <div className='flex items-center'>
          <div className='h-12 w-12 flex items-center justify-center flex-none rounded-full bg-gradient-to-b from-slate-700 to-slate-700/30'>
            <UserIcon className='h-7 w-7' />
          </div>
          <div className='flex w-full items-center gap-3'>
            <div className='h-[2px] w-full bg-slate-800/60'></div>
            <div className='h-3 w-3 flex-none rounded-full bg-slate-800'></div>
            <div className='h-[2px] w-full bg-slate-800/60'></div>
          </div>
          <Link
            to={`/advocates/${advocate?.username}`}
            className='flex relative w-auto flex-none flex-col items-center rounded-lg  bg-gradient-to-b from-slate-700 to-slate-700/30 border-t border-slate-400/40 p-3 hover:bg-slate-700 transition-all duration-200'
          >
            <div className='h-13 w-13 p-[2px] bg-sky-300 rounded-full  overflow-hidden'>
              <img
                src={advocate?.profile_pic}
                alt=''
                className='h-12 w-12 rounded-full'
              />
            </div>
            <h1 className='mt-auto flex-nowrap text-xs mt-3  capitalize text-slate-300'>
              {advocate?.username}
            </h1>
            {/* <p>D.A at {advocate.}</p> */}
          </Link>
          <div className='flex w-full items-center gap-3'>
            <div className='h-[2px] w-full bg-slate-800/60'></div>
            <div className='h-3 w-3 flex-none rounded-full bg-slate-800'></div>
            <div className='h-[2px] w-full bg-slate-800/60'></div>
          </div>
          <div className='h-12 w-12 flex items-center justify-center flex-none rounded-full bg-gradient-to-b from-slate-700 to-slate-700/30'>
            <UserIcon className='h-7 w-7' />
          </div>
        </div>
        <div className='flex'>
          <div className='h-12 w-12 flex items-center justify-center flex-none rounded-full bg-gradient-to-b from-slate-700 to-slate-700/30'>
            <UserIcon className='h-7 w-7' />
          </div>
          <div className='flex w-full items-center gap-3'>
            <div className='h-[2px] w-full bg-slate-800/60'></div>
            <div className='h-3 w-3 flex-none rounded-full bg-slate-800'></div>
            <div className='h-[2px] w-full bg-slate-800/60'></div>
          </div>
          <div className='h-12 w-12 flex items-center justify-center flex-none rounded-full bg-gradient-to-b from-slate-700 to-slate-700/30'>
            <UserIcon className='h-7 w-7' />
          </div>
          <div className='flex w-full items-center gap-3'>
            <div className='h-[2px] w-full bg-slate-800/60'></div>
            <div className='h-3 w-3 flex-none rounded-full bg-slate-800'></div>
            <div className='h-[2px] w-full bg-slate-800/60'></div>
          </div>
          <div className='h-12 w-12 flex items-center justify-center flex-none rounded-full bg-gradient-to-b from-slate-700 to-slate-700/30'>
            <UserIcon className='h-7 w-7' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopersDisplay;
