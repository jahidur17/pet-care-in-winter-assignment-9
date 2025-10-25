import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const handleUpdate = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Profile Updated successfully!");
      setIsEditing(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-start py-20 bg-gray-100">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-red-600">
          My Profile
        </h1>
        {user ? (
          <div className="flex flex-col items-center space-y-4">
            <img
              src={user.photoURL || "https://via.placeholder.com/150"}
              alt="User Avatar"
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
            />
            <div className="text-center mb-4">
              <p className="text-lg font-semibold">
                {user.displayName || "No Name"}
              </p>
              <p className="text-gray-600">{user.email}</p>
            </div>
            {isEditing ? (
              <form
                className="flex flex-col space-y-3 w-full"
                onSubmit={handleUpdate}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Image Url"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                onClick={() => setIsEditing(true)}
              >
                Update Profile
              </button>
            )}
          </div>
        ) : (
          <p className="text-center text-red-500">No user is logged in. ✅</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
