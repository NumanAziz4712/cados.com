import React from "react";
const Socials = () => {
  return (
    <div className=' mt-28 border-t border-b border-slate-500/10'>
      <div className='custom-container pt-12 md:pt-20 pb-10'>
        <h3 className='text-slate-300 font-normal text-lg md:text-xl md:font-semibold text-center'>
          Trusted by companies around the globe
        </h3>

        {/* logos */}
        <div className='grid grid-cols-4 items-center'>
          <img
            src='Thirdweb.svg'
            alt='stripe logo'
            className=' max-h-[160px]  grayscale invert opacity-50'
          />
          <img
            src='Vercel.svg'
            alt='vercel logo'
            className='text-white grayscale max-h-[130px] invert opacity-50'
          />
          <img
            src='Sentry.svg'
            alt='vercel logo'
            className='text-white grayscale max-h-[160px] invert opacity-50'
          />
          <img
            src='Sanity.svg'
            alt='vercel logo'
            className='text-white grayscale max-h-[160px] invert opacity-50'
          />
        </div>
      </div>
    </div>
  );
};

export default Socials;
