const {buildModule} = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("NetflixModule", (m) =>{
    const netflix = m.contract("NetflixClone")
    return {netflix};
})
