const Filters = () => {
  return (
    <div className="flex gap-4 mb-6">
      <select className="px-3 py-2 border rounded">
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <select className="px-3 py-2 border rounded">
        <option value="">Country</option>
        {/* Populate dynamically */}
      </select>
    </div>
  );
};

export default Filters;
