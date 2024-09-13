import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Disconnect MetaMask
    if (window.ethereum && window.ethereum.selectedAddress) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(() => {
        // Clear the connected accounts (disconnecting)
        window.ethereum.request({ method: 'eth_disconnect' });
      }).catch(err => console.error('MetaMask logout error:', err));
    }

    // Redirect to homepage
    navigate('/');
  };

  return (
    <header className="flex justify-between items-center p-4 bg-black">
      <div className="flex items-center space-x-4">
        <div className="text-red-600 font-bold text-3xl">NETFLIX</div>
        <nav className="hidden md:flex space-x-4 text-white">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">TV Shows</a>
          <a href="#" className="hover:text-gray-400">Movies</a>
          <a href="#" className="hover:text-gray-400">New & Popular</a>
          <a href="#" className="hover:text-gray-400">My List</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4 text-white">
        <button className="hidden md:block">Children</button>
        <button><i className="fas fa-bell"></i></button>
        <button><i className="fas fa-user-circle"></i></button>
        <button onClick={handleSignOut} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
          Sign Out
        </button>
      </div>
    </header>
  );
}

export default Navbar;
