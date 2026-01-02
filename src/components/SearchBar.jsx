const SearchBar = ({value, onChange}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search users..."
      className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring"
      // YOUR LOGIC HERE
    />
  );
};

export default SearchBar;