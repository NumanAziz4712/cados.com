import React from "react";
import {
  ArrowTrendingUpIcon,
  CursorArrowRaysIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
const About = () => {
  return (
    <div className=''>
      <div className='custom-container md:py-28 py-16 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 sm:gap-12 gap-14'>
        <figure>
          <div className='border-t border-slate-700/60 h-12 w-12 rounded-lg flex items-center justify-center bg-slate-800 md:mb-7 mb-8'>
            <ChatBubbleBottomCenterTextIcon className='h-7 w-7 text-sky-300 ' />
          </div>
          <div>
            {" "}
            <h3 className='text-lg font-medium text-slate-200 mb-2'>
              Collaborate with developers
            </h3>
            <p className='leading-lg leading-7 '>
              {" "}
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rerum praesentium accusamus
              in placeat voluptas dolorem at sequi facilis
              odit iusto, quod, corporis{" "}
            </p>
          </div>
        </figure>
        <figure>
          <div className='border-t border-slate-700/60 h-12 w-12 rounded-lg flex items-center justify-center bg-slate-800 md:mb-7 mb-8'>
            <ArrowTrendingUpIcon className='h-7 w-7 text-sky-300 ' />
          </div>
          <div>
            {" "}
            <h3 className='text-lg font-medium text-slate-200 mb-2'>
              Go with trend in tech
            </h3>
            <p className='leading-lg leading-7'>
              {" "}
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rerum praesentium accusamus
              in placeat voluptas dolorem at sequi facilis
              odit iusto, quod, corporis{" "}
            </p>
          </div>
        </figure>
        <figure>
          <div className='border-t border-slate-700/60 h-12 w-12 rounded-lg flex items-center justify-center bg-slate-800 md:mb-7 mb-8'>
            <CursorArrowRaysIcon className='h-7 w-7 text-sky-300 ' />
          </div>
          <div>
            {" "}
            <h3 className='text-lg font-medium text-slate-200 mb-2'>
              Your next goal, a click away
            </h3>
            <p className='leading-lg leading-7'>
              {" "}
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rerum praesentium accusamus
              in placeat voluptas dolorem at sequi facilis
              odit iusto, quod, corporis{" "}
            </p>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default About;
