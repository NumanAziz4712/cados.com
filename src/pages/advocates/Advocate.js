import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAllAdvocates } from "../../hooks/useAllAdvocates";
import { useAllCompanies } from "../../hooks/useAllCompanies";
import CompanyCard from "../companies/CompanyCard";

const Advocate = () => {
  const { str } = useParams();
  const { advocates, loading } = useAllAdvocates(
    `https://cados.up.railway.app/advocates/${str}`
  );
  const { companies } = useAllCompanies(
    `https://cados.up.railway.app/companies/`
  );
  const advocate = advocates?.advocate;
  console.log(companies?.companies);

  const compArrayId =
    advocate?.companies.length > 0 && advocate.companies[0];

  const advCompany = companies?.companies.find(
    (company) => company.id === compArrayId
  );
  console.log(advCompany);
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

  if (loading) {
    return (
      <div className='text-center mt-20'>Loading...</div>
    );
  }

  return (
    <div className='custom-container mx-auto my-24'>
      {advocate && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  '>
          <div className='lg:col-span-2'>
            {/* developer card */}
            <div className='flex items-center gap-8'>
              <div className='flex-none'>
                <img
                  src={advocate.profile_pic}
                  alt='developer picture'
                  className='w-20 h-20  ring ring-sky-300 rounded-full '
                />
              </div>

              {/* name */}
              <div>
                <h1 className='md:text-3xl text-2xl font-medium text-slate-100'>
                  {advocate.name}
                </h1>
                <p className='text-slate-400'>
                  @{advocate.username}
                </p>
              </div>
            </div>

            {/* bio */}
            <div className='my-8 mb-12 mb:mb-14'>
              <p className='max-w-lg font-semibold text-base md:text-lg leading-[150%]'>
                {advocate.bio}
              </p>
            </div>

            <div className='flex divide-x divide-slate-800'>
              {/* analytics */}
              <div className='flex items-center gap-7 pr-8  '>
                <div className='flex flex-col items-center '>
                  <span className='font-semibold text-sky-200 '>
                    {formatter(+advocate.follower_count)}
                  </span>
                  <span className='text-[10px] tracking-widest uppercase '>
                    followers
                  </span>
                </div>
              </div>

              {/* social */}
              <div className='pl-8'>
                <a
                  href={advocate.twitter}
                  className='flex flex-col items-center'
                >
                  <span className='font-semibold text-sky-200 tracking-wide'>
                    Twitch
                  </span>
                  <a className='text-[10px] tracking-widest uppercase '>
                    twitter
                  </a>
                </a>
              </div>
            </div>
          </div>
          {/* company */}

          {advCompany && (
            <div className='mt-12 md:mt-0 '>
              <div className=' flex space-x-6 items-center mb-6'>
                <p className='text-xs font-medium uppercase tracking-[3px]'>
                  Works at
                </p>
              </div>
              {/* company info */}
              <CompanyCard company={advCompany} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Advocate;
