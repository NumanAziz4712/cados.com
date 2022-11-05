import React from "react";

const Button = ({ title }) => {
  return (
    <div
      className=' sm:inline-block px-3 flex-none py-1.5 bg-rose-500 rounded-full text-sm text-center hover:bg-rose-600 text-white
    capitalize'
    >
      {title}
    </div>
  );
};

export default Button;
