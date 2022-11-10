import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
const AdvocateCard = ({ advocates, query }) => {
  // -- ------------------
  // -- Followers formatter
  // -- ------------------
  const formatter = (number) => {
    if (number > 1000000000) {
      return (
        (number / 1000000000)
          .toFixed(1)
          .replace(/\.0$/, "") + "G"
      );
    }
    if (number > 1000000) {
      return (
        (number / 1000000).toFixed(1).replace(/\.0$/, "") +
        "M"
      );
    }
    if (number > 1000) {
      return (
        (number / 1000).toFixed(1).replace(/\.0$/, "") + "k"
      );
    }
    return number;
  };
  // -- ------------------

  if (advocates?.length === 0) {
    return (
      <div className='mt-20 text-center text-lg font-medium'>
        <p>
          Could not find developers that matches "{query}"
        </p>
      </div>
    );
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-6 mt-20'>
      {advocates.map((advocate) => (
        // -----------------------
        // advocate card
        // -----------------------

        <Link
          to={`/advocates/${advocate.username}`}
          key={advocate.username}
          className=' bg-slate-800/60 divide-y divide-slate-600/20 rounded-lg border border-slate-600/10 border-t-slate-600/50 flex flex-col justify-between '
        >
          {/* -------------------- */}
          {/* advocate info wrapper */}
          {/* -------------------- */}
          <div className='p-8 pb-12'>
            <div className='flex items-center gap-6 mb-6'>
              {/* profile image */}
              <img
                src={advocate.profile_pic}
                alt='advocate profile pic'
                className='w-20 h-20 rounded-full border border-slate-700 '
              />
              {/* username name */}
              <div>
                <h2 className=' text-white capitalize font-semibold text-lg -mb-1'>
                  {advocate.name?.substring(0, 20)}
                </h2>
                <span className='inline-block text-sm'>
                  @{advocate.username}
                </span>
              </div>
            </div>
            {/*  bio*/}
            <div className=''>
              <p>{advocate.bio?.substring(0, 100)}</p>
            </div>
          </div>

          {/* ------------ */}
          {/* advocate analytics */}
          {/* ------------ */}

          <div className='flex items-center justify-between  px-8 py-6  '>
            <div className='flex flex-col items-center '>
              <span className='font-semibold text-slate-300 '>
                {formatter(+advocate.follower_count)}
              </span>
              <span className='text-[10px] tracking-widest uppercase '>
                followers
              </span>
            </div>
            {/* <div className='flex flex-col items-center'>
              <span className='font-semibold text-slate-200 tracking-wide'>
                {advocate.companies.length > 0
                  ? advocate.companies[0]
                  : 0}
              </span>
              <span className='text-[10px] tracking-widest uppercase '>
                companies
              </span>
            </div> */}

            {/* view profile */}
            <Button title='view profile' />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AdvocateCard;
