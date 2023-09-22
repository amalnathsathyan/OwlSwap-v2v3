require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-solhint");
const dotenv = require('dotenv');
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [{
      version: '0.7.6',
    },
    {
      version: '0.8.10'
    },
    {
      version: '0.8.0'
    },]
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.ALCHEMY_ARB_MAINNET_URL
      }
    },
  },
};