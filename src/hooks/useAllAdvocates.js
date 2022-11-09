import axios from "axios";
import { useEffect, useState } from "react";

export const useAllAdvocates = (url) => {
  const [advocates, setAdvocates] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const getAllAdvocates = async () => {
        const data = await axios.get(url);
        setAdvocates(data.data);
        setLoading(false);
      };
      getAllAdvocates();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [url]);

  return { advocates, loading };
};
