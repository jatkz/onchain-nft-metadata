require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: "~/.secrets/.test_env_crypto" })

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
      mumbai: {
      url: process.env.MUMBAI_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    etherscan: {
      apiKey: process.env.POLYGONSCAN_API_KEY
    }
};
