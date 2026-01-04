import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import UserCard from "../components/UserCard";
import { useEffect,useMemo,useState, useRef } from "react";
import { fetchUsers } from "../api/usersApi";
import { useNavigate, useSearchParams } from "react-router-dom";

const Users = () => {
  // YOUR LOGIC HERE
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(false);
  const [page,setPage] = useState(1);
  const [hasMore,setHasMore] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [gender,setGender] = useState(searchParams.get("gender") || "all");
  const [country,setCountry] = useState(searchParams.get("country") || "all");
  const [ageRange, setAgeRange] = useState({
    min: Number(searchParams.get("minAge")) || 18,
    max: Number(searchParams.get("MaxAge")) || 60
  });

  const loaderRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUsers = async() =>{
      setLoading(true);
      try {
        const response = await fetchUsers(page,20);
        console.log(response);
        const newUsers = response.data.data;

        setUsers((prev) => {
          const existingIds = new Set(prev?.map((u) => u.id));
          const uniqueNewUsers = newUsers.filter(
            (u) => !existingIds.has(u.id)
          );
          return [...prev,...uniqueNewUsers]
        });
        setHasMore(response.data.nextPage)
      } catch (error) {
        console.error("Failed to fetch users",error);
      }
      finally{
        setLoading(false);
      }
    }
    loadUsers();
  },[page])

  useEffect(() =>{
    if(loading || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) =>{
        if(entry.isIntersecting){
          setPage((prev) => prev + 1);
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if(loaderRef.current) observer.unobserve(loaderRef.current)
    }
  },[loading,hasMore])


  // Persist filters to URL
  useEffect(() => {
    const params = {};

    if(search) params.search = search;
    if(gender != "all") params.gender = gender;
    if(country != "all") params.country = country;

    params.minAge = ageRange.min;
    params.maxAge = ageRange.max;

    setSearchParams(params, {replace: true});
  },[search,gender,country, ageRange, setSearchParams])

  // 🔹 Reset pagination when filters change
  useEffect(() => {
    setUsers([]);
    setPage(1);
    setHasMore(true);
  },[search,gender, country,ageRange])

  // Code for Dynamic Countries
  const countries = useMemo(() =>{
    return Array.from(
      new Set(users.map((u) => u.location.country))
    )
  },[users])

  const filteredUsers = useMemo(() => {
    return users.filter( (user)=>{
      const matchesSearch = 
      user.name.first.toLowerCase().includes(search.toLowerCase()) ||
      user.name.last.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

      const matchesGender = gender === "all" || user.gender === gender;

      const matchesCountry = country === "all" || user.location.country === country;

      const matchesAge = user.dob.age >= ageRange.min && user.dob.age <= ageRange.max;


      return matchesSearch && matchesGender && matchesCountry && matchesAge;



      
  })
  },[users,search,gender,country,ageRange])
  
  return (
    <>
      <SearchBar value={search} onChange={setSearch}/>
      <Filters
      gender={gender}
      setGender={setGender}
      country = {country}
      setCountry={setCountry}
      countries={countries}
      ageRange = {ageRange}
      setAgeRange = {setAgeRange}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Render UserCard */}
        {filteredUsers.map((user) => (
          <UserCard
          key = {user.id}
          user={user}
          onSelect={() => navigate(`/users/${user.id}`)}
          onFavorite={() => console.log("Favorite: ",user.id)}
          />
        ))}
      </div>

      {/* Pagination / Load More */}
      {hasMore && (
        <div
          ref={loaderRef}
          className="flex justify-center py-6 text-gray-500"
        >
          {loading && "Loading more users..."}
        </div>
      )}

      
    </>
  );
};

export default Users;
