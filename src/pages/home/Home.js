import React from "react";
import { Link } from "react-router-dom";
import About from "../../components/About";
import DevelopersDisplay from "../../components/DevelopersDisplay";
import Footer from "../../components/Footer";
import Socials from "../../components/Socials";
const Home = () => {
  return (
    <div className='relative '>
      {/* bg image */}
      <img
        alt=''
        src='bgblur1.png'
        width='530'
        height='530'
        decoding='async'
        class='absolute bottom-full right-full -mr-72 -mb-52 opacity-50 '
      ></img>

      {/* ------ */}

      <div className='grid lg:grid-cols-2 grid-cols-1 custom-container items-center justify-between gap-12 mt-20 mb-28 '>
        {/* main heading */}
        <div className='flex-1'>
          <h1 className='capitalize md:px-8 lg:px-0 text-center lg:text-left font-medium leading-[150%]  sm:leading-[130%] text-sky-100 text-4xl  sm:text-5xl'>
            finding developer{" "}
            <span class='relative whitespace-nowrap '>
              <svg
                aria-hidden='true'
                viewBox='0 0 418 42'
                class='absolute top-[60%] left-0 h-[0.58em] w-full fill-rose-500/90'
                preserveAspectRatio='none'
              >
                <path d='M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z'></path>
              </svg>
              <span class='relative '>advocates </span>
            </span>{" "}
            made easy.
          </h1>

          <p className='text-xl text-center mx-auto lg:mx-0 lg:text-left md:max-w-md max-w-lg leading-[150%] mt-10'>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Obcaecati accusantium id
            soluta repellat iusto
          </p>

          {/* ---- hero links */}
          <div className='flex mt-14 lg:justify-start justify-center flex-col sm:flex-row items-center sm:gap-6 gap-3'>
            <Link
              to={"/advocates"}
              className=' uppercase transition-all duration-300 tracking-wide text-slate-900 font-medium rounded-full hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-300/20 text-center bg-sky-400 px-8 py-3 sm:w-auto text-sm sm:text-base w-full'
            >
              advocates
            </Link>
            <Link
              to={"/companies"}
              className=' uppercase transition-all duration-300 tracking-wide text-sky-300 font-medium text-sm sm:text-base rounded-full hover:shadow-lg hover:shadow-sky-300/20 bg-slate-800/30 border border-slate-700/70  hover:bg-slate-800 px-8  py-3 sm:w-auto text-center w-full'
            >
              companies
            </Link>
          </div>
        </div>

        {/* hero image */}
        <div className='relative h-full w-full'>
          <img
            alt=''
            src='blur-cyan.png'
            width='530'
            height='530'
            class='absolute  -top-64 opacity-80 -z-50 xl:-right-32 -right-8'
          />
          <img
            alt=''
            src='blur-indigo.png'
            width='567'
            height='300'
            class='-z-50  opacity-80  absolute -bottom-32 -right-8 xl:-right-32'
          ></img>
          {/* image goes here  */}
          <DevelopersDisplay />
        </div>
      </div>

      {/* Social Proofs */}
      <Socials />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
