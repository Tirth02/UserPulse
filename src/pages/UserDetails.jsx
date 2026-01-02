import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../api/usersApi";


const UserDetails = () => {
  const {id} = useParams();

  const[user, setUser] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState(null);

  // YOUR LOGIC HERE
  useEffect(() => {
    const loadUser = async() => {
      setLoading(true);
      try {
        const response = await fetchUserById(id);
        setUser(response.data);
        
      } catch (error) {
        setError("Failed to load user Details");
      }
      finally{
        setLoading(false);
      }
    };
    loadUser()
  },[id])

  if(loading)
  {
    return <div className="text-center">Loading User...</div>
  }
  if(error)
  {
    return <div className="text-center text-red-500">{error}</div>
  }
  if(!user) return null;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">User Details</h2>

      <div className="flex items-center gap-4 mb-6">
        <img 
        src={user.picture.large}
        alt={user.name.first}
        className="w-24 h-24 rounded-full"
        />
        <div>
          <h3 className="text-lg font-medium">{` ${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Age:</strong> {user.dob.age}</p>
        <p>
          <strong>Country:</strong> {user.location.country}
        </p>
        <p>
          <strong>City:</strong> {user.location.city}
        </p>
      </div>
      
      {/* User information */}
    </div>
  );
};

export default UserDetails;
