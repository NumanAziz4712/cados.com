import React from "react";
import { useParams } from "react-router-dom";
import { useAllAdvocates } from "../../hooks/useAllAdvocates";

const Advocate = () => {
  const { str } = useParams();
  console.log(str);
  const { advocates } = useAllAdvocates(
    `https://cados.up.railway.app/advocates/${str}`
  );

  // formatter
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
  const advocate = advocates?.advocate;
  console.log(advocate);
  return (
    <div className='max-w-2xl mx-auto mt-24'>
      {advocate && (
        <div className=''>
          {/* developer card */}
          <div className='flex items-center gap-8'>
            <div>
              <img
                src={advocate.profile_pic}
                alt='developer picture'
                className='w-20 h-20 ring ring-sky-300 rounded-full '
              />
            </div>

            {/* name */}
            <div>
              <h1 className='text-3xl font-medium text-slate-100'>
                {advocate.name}
              </h1>
              <p className='text-slate-400'>
                @{advocate.username}
              </p>
            </div>
          </div>

          {/* bio */}
          <div className='my-8 mb-14'>
            <p className='max-w-xl font-semibold text-lg leading-[150%]'>
              {advocate.bio}
            </p>
          </div>

          <div className='flex divide-x divide-slate-800'>
            {/* analytics */}
            <div className='flex items-center gap-7 pr-8  '>
              <div className='flex flex-col items-center '>
                <span className='font-semibold text-slate-300 '>
                  {formatter(+advocate.follower_count)}
                </span>
                <span className='text-[10px] tracking-widest uppercase '>
                  followers
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='font-semibold text-slate-200 tracking-wide'>
                  {advocate.companies.length > 0
                    ? advocate.companies[0]
                    : 0}
                </span>
                <span className='text-[10px] tracking-widest uppercase '>
                  companies
                </span>
              </div>
            </div>

            {/* social */}
            <div className='pl-8'>twitter</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Advocate;
