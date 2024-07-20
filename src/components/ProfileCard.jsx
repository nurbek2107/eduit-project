"use client";
import { useState } from "react";
import Image from "next/image";

const Profile = ({
  user = {}, // Default to an empty object if user is undefined
  similarProfiles = [],
  experiences = [],
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name || "",
    avatar: user.avatar || "",
    title: user.title || "",
    bio: user.bio || "",
    status: user.status || "",
    memberSince: user.memberSince || "",
    phone: user.phone || "",
    email: user.email || "",
    address: user.address || "",
  });
  const [nameFields,  setNameFields] = useState({
    firstName: (user.name && user.name.split(" ")[0]) || "",
    lastName: (user.name && user.name.split(" ")[1]) || "",
    
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setNameFields({
      ...nameFields,
      [name]: value,
    });
    setFormData({
      ...formData,
        name: `${nameFields.firstName} ${nameFields.lastName}`,
        avatar: `https://ui-avatars.com/api/?name=${nameFields.firstName}+${nameFields.lastName}&background=random`,
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
    });
  };

  const handleSave = () => {
    // Implement save logic here
    console.log("Saved Data: ", formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Revert to original data if editing is canceled
    setFormData({
      name: user.name || "",
      avatar: user.avatar || "",
      title: user.title || "",
      bio: user.bio || "",
      status: user.status || "",
      memberSince: user.memberSince || "",
    });
    setNameFields({
      firstName: (user.name && user.name.split(" ")[0]) || "",
      lastName: (user.name && user.name.split(" ")[1]) || "",
    });
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2">
        {/* Left Side */}
        <div className="w-full md:w-3/12 md:mx-2">
          {/* Profile Card */}
          <div className="bg-white p-3 border-t-4 border-green-400">
            <div className="image overflow-hidden">
              <Image
                className="h-auto w-full mx-auto"
                src={formData.avatar}
                alt={`${formData.name}'s avatar`}
                width={400}
                height={400}
              />
            </div>
            {isEditing ? (
              <>
                <input
                  className="text-gray-900 font-bold text-xl leading-8 my-1"
                  type="text"
                  name="firstName"
                  value={nameFields.firstName}
                  onChange={handleNameChange}
                  placeholder="First Name"
                />
                <input
                  className="text-gray-900 font-bold text-xl leading-8 my-1"
                  type="text"
                  name="lastName"
                  value={nameFields.lastName}
                  onChange={handleNameChange}
                  placeholder="Last Name"
                />
              </>
            ) : (
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {formData.name}
              </h1>
            )}
            {isEditing ? (
              <input
                className="text-gray-600 font-lg text-semibold leading-6"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
              />
            ) : (
              <h3 className="text-gray-600 font-lg text-semibold leading-6">
                {formData.title}
              </h3>
            )}
            {isEditing ? (
              <textarea
                className="text-sm text-gray-500 hover:text-gray-600 leading-6"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Bio"
              />
            ) : (
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                {formData.bio}
              </p>
            )}
            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3">
                <span>Status</span>
                <span className="ml-auto">
                  {isEditing ? (
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="bg-gray-100 py-1 px-2 rounded text-gray-700 text-sm"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  ) : (
                    <span
                      className={`bg-${
                        formData.status === "Active" ? "green" : "gray"
                      }-500 py-1 px-2 rounded text-white text-sm`}
                    >
                      {formData.status}
                    </span>
                  )}
                </span>
              </li>
              <li className="flex items-center py-3">
                <span>Member since</span>
                <span className="ml-auto">
                  {isEditing ? (
                    <input
                      type="text"
                      name="memberSince"
                      value={formData.memberSince}
                      onChange={handleChange}
                      className="bg-gray-100 py-1 px-2 rounded text-gray-700 text-sm"
                      placeholder="Member Since"
                    />
                  ) : (
                    formData.memberSince
                  )}
                </span>
              </li>
            </ul>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={isEditing ? handleSave : handleEditToggle}
            >
              {isEditing ? "Save" : "Edit"}
            </button>
            {isEditing && (
              <button
                className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}
          </div>
          {/* End of profile card */}

          <div className="my-4"></div>

          {/* Similar Profiles */}
          <div className="bg-white p-3 hover:shadow">
            <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
              <span className="text-green-500">
                <svg
                  className="h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
              <span>Similar Profiles</span>
            </div>
            <div className="grid grid-cols-3">
              {Array.isArray(similarProfiles) && similarProfiles.length > 0 ? (
                similarProfiles.map((profile, index) => (
                  <div key={index} className="text-center my-2">
                    <Image
                      className="h-16 w-16 rounded-full mx-auto"
                      src={profile.avatar}
                      alt={profile.name}
                      width={64}
                      height={64}
                    />
                    <a href={profile.link} className="text-main-color">
                      {profile.name}
                    </a>
                  </div>
                ))
              ) : (
                <div className="text-center my-2 text-gray-500">
                  No similar profiles available.
                </div>
              )}
            </div>
          </div>
          {/* End of similar profiles card */}
        </div>

        {/* Right Side */}
        <div className="w-full md:w-9/12 mx-2 h-64">
          {/* About Section */}
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span className="text-green-500">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">About</span>
              <button
                onClick={handleEditToggle}
                className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                {isEditing ? "Cancel" : "Edit"}
              </button>
            </div>
            {isEditing ? (
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm gap-4">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">First Name</div>
                    <div className="px-4 py-2">
                      <input
                        type="text"
                        name="firstName"
                        value={nameFields.firstName}
                        onChange={handleNameChange}
                        className="bg-gray-100 py-1 px-2 rounded text-gray-700 text-sm"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Last Name</div>
                    <div className="px-4 py-2">
                      <input
                        type="text"
                        name="lastName"
                        value={nameFields.lastName}
                        onChange={handleNameChange}
                        className="bg-gray-100 py-1 px-2 rounded text-gray-700 text-sm"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email</div>
                    <div className="px-4 py-2">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-100 py-1 px-2 rounded text-gray-700 text-sm"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Phone</div>
                    <div className="px-4 py-2">
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-100 py-1 px-2 rounded text-gray-700 text-sm"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSave}
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm gap-4">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">First Name</div>
                    <div className="px-4 py-2">{nameFields.firstName}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Last Name</div>
                    <div className="px-4 py-2">{nameFields.lastName}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email</div>
                    <div className="px-4 py-2">{formData.email}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Phone</div>
                    <div className="px-4 py-2">{formData.phone}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* End of about section */}

          {/* Experiences Section */}
          <div className="bg-white p-3 shadow-sm rounded-sm mt-4">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span className="text-green-500">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7h2v2H3zM3 11h2v2H3zM3 15h2v2H3zM7 7h2v2H7zM7 11h2v2H7zM7 15h2v2H7zM11 7h2v2h-2zM11 11h2v2h-2zM11 15h2v2h-2zM15 7h2v2h-2zM15 11h2v2h-2zM15 15h2v2h-2z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">Experiences</span>
            </div>
            <ul>
              {experiences.length > 0 ? (
                experiences.map((exp, index) => (
                  <li key={index} className="flex justify-between py-2">
                    <div>
                      <div className="text-gray-900 font-semibold">
                        {exp.title}
                      </div>
                      <div className="text-gray-600">{exp.company}</div>
                    </div>
                    <div className="text-gray-600">{exp.years}</div>
                  </li>
                ))
              ) : (
                <div className="text-center text-gray-500">
                  No experiences available.
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
