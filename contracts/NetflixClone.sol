// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract NetflixClone {
    address public owner;

    struct User {
        address userAddress;
        bool isAdmin;
    }

    // Mapping of user addresses to user roles
    mapping(address => User) public users;

    // Array to store IPFS hashes of the videos uploaded
    string[] public videoList;

    // Modifier to restrict actions to admins
    modifier onlyAdmin() {
        require(users[msg.sender].isAdmin, "You are not an admin");
        _;
    }

    constructor() {
        owner = msg.sender;
        users[owner] = User(owner, true);  // Assign the contract creator as admin
    }

    // Function for user to login or register by connecting MetaMask
    function login() public {
        require(users[msg.sender].userAddress == address(0), "User already registered");
        users[msg.sender] = User(msg.sender, false);  // Default to normal user
    }

    // Function to assign admin role (only admin can call this)
    function assignAdmin(address _user) public onlyAdmin {
        require(users[_user].userAddress != address(0), "User not registered");
        users[_user].isAdmin = true;
    }

    // Function for admin to upload video by storing IPFS hash
    function uploadVideo(string memory _ipfsHash) public onlyAdmin {
        videoList.push(_ipfsHash);
    }

    // Function to fetch all video IPFS hashes
    function getAllVideos() public view returns (string[] memory) {
        return videoList;
    }

    // Function to clear all videos (only admins can do this)
    function clearAllVideos() public onlyAdmin {
        delete videoList; // This will clear the entire array
    }

    // Function for signup (called after MetaMask connection)
    function signup() public {
        require(users[msg.sender].userAddress == address(0), "User already registered");
        users[msg.sender] = User(msg.sender, false);  // Default to normal user
    }
}
