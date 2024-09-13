import React from 'react';
import { useNavigate } from 'react-router-dom';

const profiles = [
  { name: 'ashishanandh...', image: 'https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg', isChildren: false },
];

const ProfileSelection = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    // Redirect to the main page on profile click
    navigate('/main');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-white text-4xl mb-8">Who's watching?</h1>
      <div className="flex space-x-8">
        {profiles.map((profile, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center cursor-pointer" 
            onClick={handleProfileClick}
          >
            <img 
              src={profile.image} 
              alt={profile.name} 
              className={`w-24 h-24 rounded-lg ${profile.isChildren ? 'border-4 border-red-500' : ''}`}
            />
            <p className="text-gray-300 text-sm mt-2">{profile.name}</p>
          </div>
        ))}
        <div className="flex flex-col items-center cursor-pointer">
          <div className="w-24 h-24 flex items-center justify-center bg-gray-500 rounded-lg">
            <span className="text-white text-4xl">+</span>
          </div>
          <p className="text-gray-300 text-sm mt-2">Add Profile</p>
        </div>
      </div>
      <button className="mt-8 text-gray-400 text-sm border border-gray-400 px-4 py-2 rounded-lg">
        Manage Profiles
      </button>
    </div>
  );
};

export default ProfileSelection;
