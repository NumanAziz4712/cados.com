import React, { useState } from "react";
import { useAllAdvocates } from "../hooks/useAllAdvocates";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const Searchbar = ({ setActive, mobileNav }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/advocates?query=${query}`);
    setActive(false);
  };

  return (
    <form onSubmit={handleSearch}>
      <div
        class={`h-10 flex items-center relative rounded-full
        md:text-sm ${
          mobileNav ? "bg-slate-700/20" : "bg-slate-800/80"
        } border-t border-slate-700/60 w-full`}
      >
        <MagnifyingGlassIcon className='h-5 w-5 text-slate-600 left-4 absolute' />
        <input
          class=' h-full w-full rounded-full bg-transparent px-6 pl-12  outline-none placeholder:text-slate-400 focus:ring-1 ring-sky-400'
          placeholder='Search devs'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Searchbar;
