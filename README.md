# 🎬 Netflix Clone Dapp

Welcome to the *Netflix Clone DApp*! 🌟 This decentralized application (DApp) allows users to manage and view videos on the blockchain. Enjoy a unique streaming experience with the added security of blockchain technology! 🚀

---

## ✨ Features

- 🔐 **Login with MetaMask**: Securely log in using MetaMask for a seamless blockchain experience.
  
- 📝 **Sign-In Page**: Provides details about the application and allows users to sign in.
  
- 👤 **Profile Selection Page**: Choose and manage user profiles for a personalized experience.
  
- 🏠 **Main Page**: View available video content and enjoy streaming.
  
- 📤 **Video Upload Option for Admins**: Admins can upload videos using IPFS hashes directly from the main page.

---

## 🚀 Current State

- **Sample Content**: The project currently includes only 2 sample test videos which is uploaded using ipfs hash.
- **UI Development**: Many web 2 functionalities need correction, and UI work is not yet complete.

---
## Check out our demo! 🎬👇

[![Watch the video](https://img.youtube.com/vi/1Ns1RmGPXL0/maxresdefault.jpg)](https://www.youtube.com/watch?v=1Ns1RmGPXL0)

https://youtu.be/1Ns1RmGPXL0


## 🚀 Quick Start

### Prerequisites

Before you get started, make sure you have the following:

- 🖥 [Node.js](https://nodejs.org/)
- 📦 [npm](https://www.npmjs.com/) (usually installed with Node.js)
- 🔐 [Metamask](https://metamask.io/)
- 💰 Ethereum wallet with testnet ETH

### Installation

1. *Clone the repository*:

   bash
   git clone https://github.com/your-username/certi-Dapp.git
   cd certi-Dapp

2. **Install dependencies**:

   bash
   npm install
   

3. **Start the development server**:

   bash
   npm run dev
   

4. **Deploy the smart contract**:

   bash
   npx hardhat ignition deploy ignition/modules/Cert.js --network <network-name>
   

---

## 💻 Frontend Overview

The DApp is designed to be user-friendly and interactive. Here’s what it offers:

- **🏠 Sign In Page**: Connect your Metamask wallet and easily search for certificates by ID.
  
- **📝 Profile Selection Page**: Select which profile to use.
  
- **📜 Main Page**: Displays the uploaded videos to users. Also Admin can add videos.

---

## 🎯 Usage Guide

### Connect to Metamask

Make sure to connect your Metamask wallet before interacting with the DApp:

javascript
const provider = new BrowserProvider(window.ethereum);
const signer = await provider.getSigner();


### Profile Selection Page

Select the profile of the user :


### Main Page 

Admin can upload videos using ipfs hashes according to categories and language. Users can only view these videos.

---

## 🎨 Screenshots

### 🏠 Sign In
![Home Page](https://github.com/AshishS2407/certi-Dapp/blob/main/Sign.png)

### 📝 Profile Selection Page
![Issue Certificate Page](https://github.com/AshishS2407/certi-Dapp/blob/main/Profile.png)

### 📜 Main Page
![Certificate Display](https://github.com/AshishS2407/certi-Dapp/blob/main/Main.png)


---

## 🤝 Contributing

We welcome contribution! 🙌 Feel free to fork this project, open issues, or submit pull requests. Let’s build something amazing together! 🚀

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

---

💻 *Happy coding!* 😊

