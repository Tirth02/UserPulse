const Filters = ({gender,setGender,country,setCountry,countries,age,setAge}) => {
  return (
    <div className="flex gap-4 mb-6">
      <select
      value={gender}
      onChange={(e) => setGender(e.target.value)}
      className="px-3 py-2 border rounded"
      >
        <option value="all">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <select
      value={country}
      onChange={(e) => setCountry(e.target.value)} 
      className="px-3 py-2 border rounded"
      >
        <option value="all">All Countries</option>

        {countries.map((code) =>(
          <option key={code} value={code}>
            {code}
          </option>
        ))}
        {/* Populate dynamically */}
      </select>

      <select
      value={age}
      onChange={(e) => setAge(e.target.value)} 
      className="px-3 py-2 border rounded"
      >
        <option value="all">All Ages</option>
        <option value="18-30">18-30</option>
        <option value="31-45">31-45</option>
        <option value="46-60">46-60</option>
        <option value="60+">60+</option>
        {/* Populate dynamically */}
      </select>

    </div>
  );
};

export default Filters;
