import React from "react";
import { useParams } from "react-router-dom";
import { useAllAdvocates } from "../../hooks/useAllAdvocates";

const Advocate = () => {
  const { id } = useParams();
  const { advocates } = useAllAdvocates(
    `https://cados.up.railway.app/advocates/${id}`
  );

  const advocate = advocates?.advocate;
  // console.log(advocate);
  return (
    <div>
      {advocate && (
        <div>
          <h1>{advocate.name}</h1>
          <p>{advocate.short_bio}</p>
        </div>
      )}
    </div>
  );
};

export default Advocate;
