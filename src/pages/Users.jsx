import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import UserCard from "../components/UserCard";
import { useEffect,useMemo,useState } from "react";
import { fetchUsers } from "../api/usersApi";
import { useNavigate } from "react-router-dom";

const Users = () => {
  // YOUR LOGIC HERE
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(false);
  const [page,setPage] = useState(1);
  const [hasMore,setHasMore] = useState(true);

  const [search, setSearch] = useState("");
  const [gender,setGender] = useState("all");
  const [country,setCountry] = useState("all");
  const [age, setAge] = useState("all");

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
      } catch (error) {
        console.error("Failed to fetch users",error);
      }
      finally{
        setLoading(false);
      }
    }
    loadUsers();
  },[page])

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

      const matchesAge = age === "all" || 
                        (age === "18-30" && user.dob.age >= 18 && user.dob.age <= 30) ||
                        (age === "31-45" && user.dob.age >= 31 && user.dob.age <= 45) ||
                        (age === "46-60" && user.dob.age >= 46 && user.dob.age <= 60) ||
                        (age === "60+" && user.dob.age > 60 ) 


      return matchesSearch && matchesGender && matchesCountry && matchesAge;



      
  })
  },[users,search,gender,country,age])
  
  return (
    <>
      <SearchBar value={search} onChange={setSearch}/>
      <Filters
      gender={gender}
      setGender={setGender}
      country = {country}
      setCountry={setCountry}
      countries={countries}
      age = {age}
      setAge = {setAge}
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
        <div className="flex justify-center mt-6">
            <button
            onClick={() => setPage((p) => p + 1)}
            disabled = {loading}
            className="px-4 py-2 border rounded cursor-pointer"
            >
              {loading? "loading..." : "LoadMore"}
            </button>
        </div>
      )}

      
    </>
  );
};

export default Users;
