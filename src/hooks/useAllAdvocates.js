import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const useAllAdvocates = (url) => {
  const [advocates, setAdvocates] = useState(null);

  useEffect(() => {
    const getAllAdvocates = async () => {
      const data = await axios.get(url);
      setAdvocates(data.data);
    };
    getAllAdvocates();
  }, [url]);

  return { advocates };
};
