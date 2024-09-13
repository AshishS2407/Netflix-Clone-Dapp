import React from 'react';

function TopMovies({ movies }) {
  return (
    <div className="mb-8">
      <h2 className="text-white text-xl font-semibold mb-4">Top 10 Movies in India Today</h2>
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide p-4">
        {movies.map((movie, index) => (
          <div key={index} className="relative">
            <span className="absolute text-[8rem] font-bold text-gray-800 opacity-30 -z-10">{index + 1}</span>
            <img src={movie.image} alt={movie.title} className="w-[160px] h-[220px] object-cover rounded-lg" />
            {movie.recentlyAdded && (
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">Recently added</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopMovies;
