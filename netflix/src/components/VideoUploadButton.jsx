import React, { useState, useEffect } from 'react';
import { BrowserProvider, Contract } from 'ethers';
import { abi } from "../scdata/NetflixClone.json"; // Update with your contract ABI
import { NetflixAddress } from "../scdata/deployed_addresses.json"; // Update with your contract address
import Footer from './Footer';

function App() {
  const [videoList, setVideoList] = useState([]);
  const [newVideo, setNewVideo] = useState("");

  // Initialize provider and contract
  const provider = new BrowserProvider(window.ethereum);
  const contract = new Contract(NetflixAddress, abi, provider);

  // Function to load videos
  const loadVideos = async () => {
    try {
      const videos = await contract.getAllVideos();
      setVideoList(videos);
    } catch (error) {
      console.error("Failed to load videos:", error);
    }
  };

  // Effect to load videos on component mount
  useEffect(() => {
    loadVideos();
  }, []);

  // Function to handle video upload
  const handleUploadVideo = async () => {
    try {
      const signer = await provider.getSigner();
      const contractWithSigner = contract.connect(signer);

      await contractWithSigner.uploadVideo(newVideo);
      setNewVideo("");
      alert("Video uploaded successfully");

      loadVideos(); // Reload videos after upload
    } catch (error) {
      console.error("Video upload failed:", error);
    }
  };

  return (
    <div className="App">
      <div className="flex flex-col items-center mb-8">
        <h3 className="text-xl font-semibold mb-2">Upload Video</h3>
        <p className="text-gray-600 mb-4">Enter the IPFS hash of the video below:</p>
        <input
          type="text"
          value={newVideo}
          onChange={(e) => setNewVideo(e.target.value)}
          placeholder="IPFS Hash"
          className="mb-4 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
        <button
          onClick={handleUploadVideo}
          className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Upload Video
        </button>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Video List</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videoList.map((video, index) => (
            <li key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="relative">
                <video className="w-full h-auto" controls>
                  <source src={`https://ipfs.io/ipfs/${video}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                  {`Video ${index + 1}`} {/* Replace this with actual video name if available */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );


}

export default App;
