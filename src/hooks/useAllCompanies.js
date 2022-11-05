import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const useAllCompanies = (url) => {
  const [companies, setCompanies] = useState("");

  useEffect(() => {
    const getAllCompanies = async () => {
      const allCompanies = await axios.get(url);
      setCompanies(allCompanies.data);
    };
    getAllCompanies();
  }, [url]);

  return { companies };
};
