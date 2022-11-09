import React from "react";
import { Link } from "react-router-dom";
import { useAllAdvocates } from "../../hooks/useAllAdvocates";
import AdvocateCard from "./AdvocateCard";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import Pagination from "react-js-pagination";

const Advocates = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const resPerPage = 6;
  let page = 1;

  const { advocates, loading } = useAllAdvocates(
    !query
      ? `https://cados.up.railway.app/advocates`
      : ` https://cados.up.railway.app/advocates/?format=json&query=${query}`
  );

  useEffect(() => {
    if (!query) {
      searchParams.delete("query");
      setSearchParams(searchParams);
    }
  }, [query]);

  // handle
  const handlePageClick = (currentPage) => {};
  return (
    <div className='custom-container  my-20  mb-24'>
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
      {loading ? (
        <p>loading...</p>
      ) : (
        advocates && (
          <AdvocateCard
            advocates={advocates.advocates}
            query={query}
          />
        )
      )}
    </div>
  );
};

export default Advocates;
