import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import MovieRow from '../components/MovieRow';
import TopSearches from './TopSearches';
import TopMovies from './TopMovies';
import ContinueWatching from './ContinueWatching';
import VideoUploadButton from './VideoUploadButton';
import Footer from './Footer';

const movies = [
    { title: 'Adios Amigo', image: '/images/adios.jpg' },
    { title: 'Brooklyn Nine-Nine', image: '/images/brooklyn99.jpg' },
    { title: 'Money Heist', image: '/images/moneyheist.jpg' },
    { title: 'Bad Boys', image: '/images/badboys.jpg' },
  ];
  
  const continueWatchingMovies = [
    { title: 'Demon Slayer', image: '/images/demon-slayer.jpg', recentlyAdded: true },
    { title: 'Friends', image: '/images/friends.jpg' },
    { title: 'Bloody', image: '/images/Buddy.jpg', recentlyAdded: true },
    { title: 'Indian 2', image: '/images/indian2.jpg' },
    { title: 'Breaking Bad', image: '/images/breaking-bad.jpg' },
  ];
  
  const topMovies = [
    { title: 'Bad Boys', image: '/images/badboys.jpg', recentlyAdded: true },
    { title: 'Beast', image: '/images/beast.jpg', recentlyAdded: true },
    { title: 'Adios Amigo', image: '/images/adios.jpg' },
    { title: 'Geostorm', image: '/images/geostorm.jpg' },
    { title: 'Fast & Furious', image: '/images/fast.jpg' },
    { title: 'Kalki', image: '/images/kalki.jpg', recentlyAdded: true },
    { title: 'Extraction 2', image: '/images/extraction2.jpg', recentlyAdded: true },
    { title: 'Jawan', image: '/images/jawan.jpg', recentlyAdded: true }, // Recent Bollywood hit
    { title: 'RRR', image: '/images/rrr.jpg', recentlyAdded: true }, // Blockbuster Telugu film
    { title: 'KGF Chapter 2', image: '/images/kgf2.jpg', recentlyAdded: true } // Popular Kannada film
];

  
  const topSearches = [
    { title: 'Stranger Things', image: '/images/stranger-things.jpg' },
    { title: 'Young Sheldon', image: '/images/young-sheldon.jpg' },
    { title: 'Big Bang Theory', image: '/images/big-bang-theory.jpg' },
    { title: 'KGF 2', image: '/images/kgf-2.jpg' },
    { title: 'Maharaja', image: '/images/maharaja.jpg' },
    { title: 'Animal', image: '/images/animal.jpg' },
  ];
  

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Banner />
      <div className="p-8">
        <MovieRow title="Your Next Watch" movies={movies} />
        {/* Add more MovieRow components as needed */}
      </div>
      
        <ContinueWatching movies={continueWatchingMovies} />
        <TopMovies movies={topMovies} />
        <TopSearches searches={topSearches} />
        <VideoUploadButton/>
        <Footer/>
      </div>
    

    
  );
}

export default App;
