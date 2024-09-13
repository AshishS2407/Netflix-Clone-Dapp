import React from 'react';

function MovieRow({ title, movies }) {
  return (
    <div className="mt-8">
      <h2 className="text-white text-xl font-semibold">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide p-4 space-x-4">
        {movies.map((movie, index) => (
          <img key={index} src={movie.image} alt={movie.title} className="w-[160px] h-[210px] object-cover rounded-lg" />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
