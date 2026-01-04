const Filters = ({gender,setGender,country,setCountry,countries,ageRange,setAgeRange}) => {

  const handleMinAge = (value) =>{
    setAgeRange((prev) => ({
      min: Math.min(value,prev.max-1),
      max: prev.max,
    }));
  }

  const handleMaxAge = (value) =>{
    setAgeRange((prev) => ({
      min: prev.min,
      max: Math.max(value,prev.min+1),
    }));
  }
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
      value={gender}
      onChange={(e) => setGender(e.target.value)}
      className="px-3 py-2 rounded border
          bg-white text-gray-900
          dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
          focus:outline-none"
      >
        <option value="all">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <select
      value={country}
      onChange={(e) => setCountry(e.target.value)} 
      className="px-3 py-2 rounded border
          bg-white text-gray-900
          dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
          focus:outline-none"
      >
        <option value="all">All Countries</option>

        {countries.map((code) =>(
          <option key={code} value={code}>
            {code}
          </option>
        ))}
        {/* Populate dynamically */}
      </select>


       <div className="flex flex-col gap-1.5 min-w-[200px]">
        <p className="font-medium text-gray-700 dark:text-gray-300">
          Age: {ageRange.min} – {ageRange.max}
        </p>

        <div className="flex gap-2">
          <input
            type="range"
            min="18"
            max="80"
            value={ageRange.min}
            onChange={(e) =>
              handleMinAge(Number(e.target.value))
            }
            className="w-full cursor-pointer accent-blue-500"
          />

          <input
            type="range"
            min="18"
            max="80"
            value={ageRange.max}
            onChange={(e) =>
              handleMaxAge(Number(e.target.value))
            }
            className="w-full cursor-pointer accent-blue-500"
          />
        </div>
      </div>

    </div>
  );
};

export default Filters;
