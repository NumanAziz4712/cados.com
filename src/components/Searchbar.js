import React, { useState } from "react";

const Searchbar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    console.log(query);
  };
  return (
    <form
      class='-my-5 mr-6 sm:mr-8 md:mr-0'
      onSubmit={handleSearch}
    >
      <div class='group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-slate-800 md:hover:ring-slate-700   lg:w-96'>
        <svg
          aria-hidden='true'
          viewBox='0 0 20 20'
          class='h-5 w-5 flex-none fill-slate-400'
        >
          <path d='M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z'></path>
        </svg>
        <input
          class='sr-only h-full w-full inline-block md:not-sr-only md:ml-2 md:text-slate-500 md:dark:text-slate-400'
          placeholder='Search devs'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Searchbar;
