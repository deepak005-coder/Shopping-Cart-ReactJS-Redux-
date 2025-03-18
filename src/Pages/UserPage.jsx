import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunk } from "../Redux/UserSlice";

const UserPage = () => {
  const { user, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserThunk());
  }, [dispatch]);

  return (
    <div className="flex justify-center min-h-screen  bg-gradient-to-br from-gray-400 via-gray-400 to-gray-300">
      <div className="shadow-md rounded-lg p-4 w-80 h-60 text-center  border border-grey-100 mt-2 ">
        {/* Loading State */}
        {loading && (
          <div className="text-lg font-semibold text-blue-500">Loading...</div>
        )}

        {/* User Info */}
        {user && (
          <div>
            <img
              src={`https://i.pravatar.cc/100?u=${user.id}`} // Smaller Placeholder Avatar
              alt="User Avatar"
              className="w-16 h-16 rounded-full mx-auto mb-3 shadow"
            />
            <h2 className="text-xl font-bold text-gray-900">
              {user.name.firstname} {user.name.lastname}
            </h2>
            <p className="text-gray-700 text-sm">{user.email}</p>
            <p className="text-gray-700 text-sm mt-1">
              📍 {user.address.city}, {user.address.zipcode}
            </p>

            <button
              className="mt-3 px-4 py-1 bg-green-700 text-white text-sm font-medium rounded-md shadow-sm 
                              hover:bg-green-600 transition duration-300 cursor-pointer"
            >
              Edit Profile
            </button>
          </div>
        )}

        {/* Error Message */}
        {error && <div className="text-red-500 font-semibold">{error}</div>}
      </div>
    </div>
  );
};

export default UserPage;
