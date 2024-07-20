"use client";
import { useState } from "react";
import ProfileCard from "@/components/ProfileCard";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    avatar: "https://docs.material-tailwind.com/img/face-2.jpg", // Rasmni `public` papkasidan yuklash
    bio: "Frontend developer with a passion for creating beautiful and functional user experiences.",
    email: "john.doe@example.com",
    phone: "+1 (123) 456-7890",
    address: "123 Main St, Anytown, USA",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {isEditing ? (
        // Add form or editing component here
        <div>
          {/* Add your editing form/component here */}
          <button
            onClick={() => handleSave(user)} // Pass updated user data
            className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Save Changes
          </button>
        </div>
      ) : (
        <>
          <ProfileCard user={user} />
        </>
      )}
    </div>
  );
};

export default ProfilePage;
