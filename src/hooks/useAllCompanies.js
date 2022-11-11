import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const useAllCompanies = (url) => {
  const [companies, setCompanies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const getAllCompanies = async () => {
      try {
        const allCompanies = await axios.get(url);
        setCompanies(allCompanies.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        if (err.response) {
          setError("The requested resource was not found");
          console.log(err.message);
        }
      }
    };
    getAllCompanies();
  }, [url]);

  return { companies, loading, error };
};
