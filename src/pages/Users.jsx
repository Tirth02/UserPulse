import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import UserCard from "../components/UserCard";
import { useEffect,useState } from "react";
import { fetchUsers } from "../api/usersApi";
import { useNavigate } from "react-router-dom";

const Users = () => {
  // YOUR LOGIC HERE
  const [users,setUsers] = useState([]);
  const [loading,setLoading] = useState(false);
  const [page,setPage] = useState(1);
  const [hasMore,setHasMore] = useState(true);

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
  
  return (
    <>
      <SearchBar />
      <Filters />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Render UserCard */}
        {users.map((user) => (
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
