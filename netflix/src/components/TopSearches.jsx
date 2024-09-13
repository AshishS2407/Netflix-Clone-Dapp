import React from 'react';

function TopSearches({ searches }) {
  return (
    <div className="mb-8">
      <h2 className="text-white text-xl font-semibold mb-4">Top Searches</h2>
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide p-4">
        {searches.map((search, index) => (
          <img key={index} src={search.image} alt={search.title} className="w-[300px] h-[170px] object-cover rounded-lg" />
        ))}
      </div>
    </div>
  );
}

export default TopSearches;
