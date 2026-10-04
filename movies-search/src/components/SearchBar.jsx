const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="flex flex-1 gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
        placeholder="Search movies..."
        className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-red-500"
      />

      <button
        onClick={onSearch}
        className="rounded-lg bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
