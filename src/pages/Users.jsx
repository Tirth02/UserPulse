import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import UserCard from "../components/UserCard";

const Users = () => {
  // YOUR LOGIC HERE

  return (
    <>
      <SearchBar />
      <Filters />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Render UserCard */}
      </div>

      {/* Pagination / Load More */}
    </>
  );
};

export default Users;
