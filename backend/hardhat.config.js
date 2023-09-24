require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
      goerli: {
        url: `${process.env.ALCHEMY_GOERLI_URL}`,
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      }, 
      // 0xBE3F9AFA4eaB299E07e42067b4a568579047cC5f
      celo: {
        url: "https://forno.celo.org",
        accounts: [`0x${process.env.PRIVATE_KEY}`],
        chainId: 42220
      }, 
      alfajores: {
        url: "https://alfajores-forno.celo-testnet.org",
        accounts: [`0x${process.env.PRIVATE_KEY}`],
        chainId: 44787
      }, 
      //0xaAA9A9aF232e461C73f8bd37F2ff8eb05249Bbf3
      polygon_mumbai: {
        chainId: 80001,
        url: process.env.ALCHEMY_MUMBAI_URL,
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },
      //0xe5BffD2554a183F4aCAbF18936c09CB35f0D9D3c
      zkEVM: {
        url: `https://rpc.public.zkevm-test.net`,
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },
      //0x2701BFdB65B980088299Ed191e73A1fFdF3A8c92
      arbitrum_goerli: {
        url: process.env.ALCHEMY_ARBITRUM_URL,
        accounts: [`0x${process.env.PRIVATE_KEY}`]}
      // 0xaAA9A9aF232e461C73f8bd37F2ff8eb05249Bbf3
  }
};
