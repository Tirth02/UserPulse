const UserCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-3 animate-pulse">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-gray-300" />

      {/* Name */}
      <div className="h-4 w-3/4 bg-gray-300 rounded" />

      {/* Email */}
      <div className="h-3 w-full bg-gray-200 rounded" />

      {/* Buttons */}
      <div className="flex gap-2 mt-auto">
        <div className="h-8 w-16 bg-gray-300 rounded" />
        <div className="h-8 w-16 bg-gray-300 rounded" />
      </div>
    </div>
  );
};

export default UserCardSkeleton;
