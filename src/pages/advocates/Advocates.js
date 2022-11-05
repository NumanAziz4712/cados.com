import React from "react";
import { Link } from "react-router-dom";
import { useAllAdvocates } from "../../hooks/useAllAdvocates";
import AdvocateCard from "./AdvocateCard";
const Advocates = () => {
  const { advocates } = useAllAdvocates(
    `https://cados.up.railway.app/advocates`
  );
  return (
    <div className='custom-container  mt-20 '>
      {/* ---------------- */}
      {/* adovate headings */}
      {/* ---------------- */}
      <div className='flex flex-col items-center gap-6'>
        <h1 className='text-white capitalize text-2xl sm:text-4xl font-bold '>
          developer advocates
        </h1>
        <p className='sm:text-lg text-base max-w-lg text-center'>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Soluta placeat iusto fuga ea
          labore nemo rerum culpa. Reiciendis modi facere
          sit{" "}
        </p>
      </div>

      {/* ---------------- */}
      {/* advocates grid */}
      {/* ---------------- */}
      {advocates && (
        <AdvocateCard advocates={advocates.advocates} />
      )}
    </div>
  );
};

export default Advocates;
