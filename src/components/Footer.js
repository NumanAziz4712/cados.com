import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-[#0A101F]'>
      <div className='custom-container pt-16 md:pt-24 pb-12 flex flex-col items-center'>
        <div className='flex flex-col pb-14 border-b border-slate-500/10 w-full items-center justify-center'>
          <img src='favicongra.png' className='h-10 w-10' />
          <div className='flex gap-7 mt-8'>
            <Link
              to={"/advocates"}
              className='text-sm tracking-loose hover:text-slate-200'
            >
              Advocates
            </Link>
            <Link
              to={"/companies"}
              className='text-sm tracking-loose hover:text-slate-200'
            >
              Companies
            </Link>
          </div>
        </div>

        <div className='w-full pt-8 gap-3 flex flex-col md:flex-row items-center md:justify-between '>
          <p className='text-sm text-slate-500'>
            Copyright © 2022 Codas. All rights reserved
          </p>
          <div className='text-sm text-slate-500 flex items-center gap-2'>
            <p>Developed by:</p>{" "}
            <a
              href='https://github.com/NumanAziz4712'
              className='inline-block px-2 py-1 rounded hover:bg-slate-800 hover:text-slate-200 underline hover:underline-none'
            >
              Numan Aziz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
