import React from 'react';

function ContinueWatching({ movies }) {
  return (
    <div className="mb-8">
      <h2 className="text-white text-xl font-semibold mb-4">Continue Watching for ashishanandhu78</h2>
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide p-4">
        {movies.map((movie, index) => (
          <div key={index} className="relative">
            <img src={movie.image} alt={movie.title} className="w-[300px] h-[170px] object-cover rounded-lg" />
            {movie.recentlyAdded && (
              <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">Recently added</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContinueWatching;
