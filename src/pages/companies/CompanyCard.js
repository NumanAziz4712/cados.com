import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
const CompanyCard = ({ companies }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-6 mt-20'>
      {companies.companies.map((company) => (
        // -----------------------
        // advocate card
        // -----------------------

        <Link
          to={`/companies/${company.id}`}
          key={company.id}
          className=' bg-slate-800 divide-y divide-slate-600/20 rounded-lg border border-slate-600/20 p-8 border-t-slate-600/70 flex flex-col justify-between '
        >
          {/* -------------------- */}
          {/* company info wrapper */}
          {/* -------------------- */}
          <div className=' pb-12'>
            <div className='flex items-center gap-6 mb-6'>
              {/* pcomapny logo */}
              <img
                src={company.logo}
                alt='company profile pic'
                className='w-20 h-20 rounded-full border border-slate-700 '
              />
              {/* username name */}
              <div>
                <h2 className=' text-white capitalize font-semibold text-lg -mb-1'>
                  {company.name?.substring(0, 20)}
                </h2>
                <span className='inline-block text-sm'>
                  @{company.username}
                </span>
              </div>
            </div>
            {/*  bio*/}
            <div className='text-center sm:text-left'>
              <p>{company.bio}</p>
            </div>
          </div>

          <Button title='view more' />
        </Link>
      ))}
    </div>
  );
};

export default CompanyCard;
