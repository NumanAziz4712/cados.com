import Loader from "../../components/Loader";
import { useAllCompanies } from "../../hooks/useAllCompanies";
import CompanyCard from "./CompanyCard";

const Companies = () => {
  // use companies hook
  const { companies, loading, error } = useAllCompanies(
    `https://cados.up.railway.app/companies/`
  );

  // errors
  if (error) {
    return <div className='mt-20 text-center'>{error}</div>;
  }
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
      {loading ? (
        <div className='mt-20'>
          <Loader />
        </div>
      ) : (
        <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-20 xl:grid-cols-3 2xl:grid-cols-5 gap-6 '>
          {companies &&
            companies.companies.map((company) => (
              <CompanyCard
                company={company}
                key={company.id}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Companies;
