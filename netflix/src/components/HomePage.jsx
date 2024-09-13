import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { BrowserProvider, Contract } from 'ethers';
import { abi } from "../scdata/NetflixClone.json"; // Update with your contract ABI
import { NetflixAddress } from "../scdata/deployed_addresses.json"; // Update with your contract address
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import FAQSection from './FAQSection';
import Footer from './Footer';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const scrollContainerRef = useRef(null);

    //login
    const [account, setAccount] = useState(null); // Initialize as null
    const [isAdmin, setIsAdmin] = useState(true);
    const navigate = useNavigate(); // Initialize the useNavigate hook

  
    const provider = new BrowserProvider(window.ethereum);
    const contract = new Contract(NetflixAddress, abi, provider);
  
    const handleLogin = async () => {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const signer = await provider.getSigner();
        const accountAddress = await signer.getAddress();
        setAccount(accountAddress);
  
        const user = await contract.users(accountAddress);
        setIsAdmin(user[1]);
  
        alert("Logged in successfully");
        navigate('/profile'); 

      } catch (error) {
        console.error("Login failed:", error);
      }
    };

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=8600bd1166143e83d01d461730816117`
        );
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };



  return (
    <div className="relative bg-black text-white">

      {/* Background Image Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.redd.it/zjgs096khv591.jpg"
            alt="Netflix background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Navbar */}
        <div className="relative z-10 flex justify-between items-center px-8 py-4">
          <div className="text-red-600 font-bold text-3xl">NETFLIX</div>
          <button className="bg-red-600 px-4 py-2 rounded text-white font-semibold" onClick={handleLogin}>
            Sign In
          </button>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-xl md:text-2xl mb-6">Starts at ₹149. Cancel anytime.</p>
          <p className="mb-4 text-lg">Ready to watch? Enter your email to create or restart your membership.</p>

          {/* Email Input */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-3 w-full md:w-96 rounded-sm text-black"
              aria-label="Email address"
            />
            <button className="bg-red-600 px-6 py-3 rounded-sm text-lg font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Trending Section (Below the Background Image) */}
      <div className="relative px-8 py-6 bg-black">
        <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
        <div className="relative">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-scroll scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {trendingMovies.slice(0, 10).map((movie, i) => (
              <div key={i} className="relative w-48">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-72 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-red-600 px-2 py-1 rounded text-xs font-bold">
                  Recently added
                </div>
                <div className="absolute bottom-2 left-2 text-4xl font-bold text-white">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Arrows */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* More Reasons to Join Section */}
      <div className="px-8 py-10 bg-black">
        <h2 className="text-2xl font-bold mb-6">More reasons to join</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Enjoy on your TV</h3>
            <p className="text-gray-400 mb-4">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1160/1160318.png"
              alt="TV icon"
              className="w-12 h-12 mx-auto"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Download your shows to watch offline</h3>
            <p className="text-gray-400 mb-4">
              Save your favourites easily and always have something to watch.
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/126/126473.png"
              alt="Download icon"
              className="w-12 h-12 mx-auto"
            />
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Watch everywhere</h3>
            <p className="text-gray-400 mb-4">
              Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968824.png"
              alt="Devices icon"
              className="w-12 h-12 mx-auto"
            />
          </div>

          {/* Card 4 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Create profiles for kids</h3>
            <p className="text-gray-400 mb-4">
              Send kids on adventures with their favorite characters in a space made just for them.
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1160/1160318.png"
              alt="Kids icon"
              className="w-12 h-12 mx-auto"
            />
          </div>
        </div>
      </div>

      <FAQSection/>
      <Footer/>
    </div>

    
  );
};

export default HomePage;
