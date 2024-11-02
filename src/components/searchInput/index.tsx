import React from "react";

export default function SearchInput() {
  return (
    <div className="  text-right  w-1/2 pb-4  ">
      <form>
        <div className="relative w-full mt-4">
          <input
            type="search"
            id="default-search"
            className=" bg-gray-100 rounded-lg text-right w-full p-2 pr-10 text-sm text-gray-900 outline-0"
            placeholder="جستوجو"
            required
            // onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none  ">
            <svg
              aria-hidden="true"
              className="w-5 h-5 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </form>
    </div>
  );
}
