const UserCard = ({ user, onSelect, onFavorite }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-3">
      <img
        src={user.picture}
        alt={user.name}
        className="w-20 h-20 rounded-full object-cover"
      />

      <div>
        <h3 className="font-medium">{user.name}</h3>
        <p className="text-sm text-gray-600">{user.email}</p>
      </div>

      <div className="flex gap-2 mt-auto">
        <button
          onClick={onSelect}
          className="px-3 py-1 text-sm border rounded"
        >
          View
        </button>

        <button
          onClick={onFavorite}
          className="px-3 py-1 text-sm border rounded"
        >
          Favorite
        </button>
      </div>
    </div>
  );
};

export default UserCard;
