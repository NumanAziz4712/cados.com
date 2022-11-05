import React from "react";
import { useAllCompanies } from "../../hooks/useAllCompanies";
import { useParams } from "react-router-dom";
import AdvocateCard from "../advocates/AdvocateCard";

const Company = () => {
  const { id } = useParams();
  const { companies } = useAllCompanies(
    `https://cados.up.railway.app/companies/${id}`
  );

  const {
    name,
    id: company_id,
    url,
    links,
    advocates,
  } = companies && companies.company;
  // console.log(companies);
  if (!companies) return <h1>loading...</h1>;
  return (
    <div className='custom-container'>
      <h1 className='uppercase text-2xl text-white'>
        {name}
      </h1>

      <div className='mt-24'>
        <h2 className='text-2xl'>
          Developer advocates at {name}:
        </h2>
        <AdvocateCard advocates={advocates} />
      </div>
    </div>
  );
};

export default Company;
