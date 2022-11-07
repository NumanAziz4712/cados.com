import React from "react";

const Button = ({ title }) => {
  return (
    <div
      className=' sm:inline-block px-3 flex-none py-1.5 bg-sky-500 rounded-full text-sm font-medium text-center hover:bg-sky-600 text-slate-900
    capitalize'
    >
      {title}
    </div>
  );
};

export default Button;
