import React from 'react';

function Banner() {
  return (
    <div className="relative h-[900px] bg-cover bg-center" style={{ backgroundImage: "url('https://moviegalleri.net/wp-content/uploads/2024/01/Mahesh-Babu-Sreeleela-in-Guntur-Kaaram-Movie-HD-Images.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="absolute bottom-10 left-10 text-white">
        <h1 className="text-5xl font-bold">Guntur Kaaram</h1>
        <div className="mt-4">
          <button className="bg-white text-black py-2 px-6 rounded-lg font-semibold mr-4">
            <i className="fas fa-play"></i> Play
          </button>
          <button className="bg-gray-600 text-white py-2 px-6 rounded-lg font-semibold">
            <i className="fas fa-info-circle"></i> More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
