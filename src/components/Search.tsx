const Search = () => {
  return (
    <div className="max-sm:hidden block sm:w-10/12">
      <form>
        <div className="flex border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2 bg-black" >
          <input
            className="w-48 sm:w-96 bg-black text-white outline-none"
            placeholder="Search"
            required
          />

          <button className="text-gray-400 font-bold py-2 px-3 rounded inline-flex items-center">
            <svg
            className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
