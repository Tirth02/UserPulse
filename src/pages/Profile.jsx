import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
      <div className="flex flex-col items-center gap-3">
        <img
          src={user.picture.large}
          alt="profile"
          className="w-24 h-24 rounded-full"
        />

        <h2 className="text-xl font-semibold">
          {user.name.first} {user.name.last}
        </h2>

        <p className="text-sm text-gray-500">{user.email}</p>

        <div className="text-sm mt-4 space-y-1">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Age:</strong> {user.dob.age}</p>
          <p><strong>Country:</strong> {user.location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
