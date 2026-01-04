const SearchBar = ({value, onChange}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search users..."
      className="w-full px-4 py-2 mb-4 rounded border
        bg-white text-gray-900 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-blue-500
        dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
        dark:placeholder-gray-500 dark:focus:ring-blue-400"
      // YOUR LOGIC HERE
    />
  );
};

export default SearchBar;