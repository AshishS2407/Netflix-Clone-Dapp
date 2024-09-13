import React, { useState, useEffect } from 'react';
import { BrowserProvider, Contract } from 'ethers';
import { abi } from "./scdata/NetflixClone.json"; // Update with your contract ABI
import { NetflixAddress } from "./scdata/deployed_addresses.json"; // Update with your contract address


function App() {

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
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
}

return (

    <div className="App">
    <h1>Netflix Clone</h1>
    <p>Account: {account}</p>
    {!account && (
      <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Signup</button>
      </div>
    )}
    </div>
)

export default App;
