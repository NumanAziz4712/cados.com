import axios from "axios";
import { useEffect, useState } from "react";

export const useAllAdvocates = (url) => {
  const [advocates, setAdvocates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const getAllAdvocates = async () => {
      try {
        const data = await axios.get(url);
        setAdvocates(data.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        if (err.response) {
          setError("The requested resource was not found");
          console.log(err.response.data);
        }
      }
    };
    getAllAdvocates();
  }, [url]);

  return { advocates, loading, error };
};
