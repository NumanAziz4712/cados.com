import React from "react";
import { Link } from "react-router-dom";
import { useAllCompanies } from "../../hooks/useAllCompanies";
import CompanyCard from "./CompanyCard";

const Companies = () => {
  // use companies hook
  const { companies } = useAllCompanies(
    `https://cados.up.railway.app/companies/`
  );
  console.log(companies);
  return (
    <div className='mt-12 mb-20 custom-container'>
      <div className='flex flex-col items-center gap-6'>
        <h1 className='text-white capitalize text-2xl sm:text-4xl font-bold '>
          Companies
        </h1>
        <p className='sm:text-lg text-base max-w-lg text-center'>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Soluta placeat iusto fuga ea
          labore nemo rerum culpa. Reiciendis modi facere
          sit{" "}
        </p>
      </div>

      {/* ------------------ */}
      {/* companies grid */}
      {/* ------------------ */}
      {companies && <CompanyCard companies={companies} />}
    </div>
  );
};

export default Companies;
