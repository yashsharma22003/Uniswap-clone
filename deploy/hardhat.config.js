const { sepolia } = require("wagmi/chains");


require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_SEPOILA_RPC = "https://polygon-amoy.infura.io/v3/64f7def27620488690aadaac57350d98";
const NEXT_PUBLIC_PRIVATE_KEY = "eb61683fcc981a130fe9551c5dbdd907f51bd55e783e17bb56d758a29428df4f";
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    amoy: {
      url: NEXT_PUBLIC_SEPOILA_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
      gasPrice: 35000000000,
    },
  },
};
