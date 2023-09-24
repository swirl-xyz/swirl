import { useState } from 'react';
import { Inter } from 'next/font/google';
import { ethers } from 'ethers';
import { TokenboundClient } from '@tokenbound/sdk';
import { EthersAdapter, SafeFactory } from '@safe-global/protocol-kit';
import { useWallets } from '@privy-io/react-auth';
import abi from '../../contracts/abis/ProjectAccount.json';

export default function Project() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const { wallets } = useWallets();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, category);
  };
  const states = {
    IDLE: 'idle',
    MINT: 'minting nft',
    TBA: 'fetching tba',
    SAFE: 'deploying safe',
    ZODIAC: 'adding safe rules',
    DONE: 'done',
  };
  const tokenURI = 'https://chocolate-objective-giraffe-337.mypinata.cloud/ipfs/Qmefgi96NSNCJFrUHWuPH67Y6kuk8KMayb9vZGgzVYLNtg?_gl=1*1isypq3*rs_ga*MTc4MjMzNjM0NC4xNjg0NTc2MTI4*rs_ga_5RMPXG14TE*MTY4NDU3NjEyOC4xLjEuMTY4NDU3NjE3MS4xNy4wLjA.';
  const chainID = process.env.NEXT_PUBLIC_CHAIN_ID;
  const [createState, setCreateState] = useState(states.IDLE);

  const mintProject = async () => {
    setCreateState(states.MINT);
    await wallets[0]?.switchChain(chainID);
    const provider = await wallets[0]?.getEthersProvider();
    const signer = await provider?.getSigner();
    const address = await signer.getAddress();
    console.log(address);
    const contract = new ethers.Contract(process.env.NEXT_PUBLIC_GOERLI_ADDRESS, abi, signer);
    const tx = await contract.mint(address, tokenURI);
    const res = tx.wait();
    console.log(res);
    setCreateState(states.TBA);

    const tokenID = await contract.getTokenID();
    console.log(tokenID);
    const tokenboundClient = new TokenboundClient({ signer, chainId: 5 });
    const tokenBoundAccount = tokenboundClient.getAccount({
      tokenContract: process.env.NEXT_PUBLIC_GOERLI_ADDRESS,
      tokenId: tokenID,
    });
    console.log('Token bound account created!', tokenBoundAccount);
    setCreateState(states.SAFE);

    const ethAdapter = new EthersAdapter({
      ethers,
      signerOrProvider: signer,
    });

    const safeFactory = await SafeFactory.create({ ethAdapter });
    const safeAccountConfig = {
      owners: [
        tokenBoundAccount,
      ],
      threshold: 1,
    };
    const safeTBAOwner = await safeFactory.deploySafe({ safeAccountConfig });
    const safeAddress = await safeTBAOwner.getAddress();

    console.log('Your Safe has been deployed:');
    console.log(`https://goerli.etherscan.io/address/${safeAddress}`);
    console.log(`https://app.safe.global/gor:${safeAddress}`);
    setCreateState(states.ZODIAC);
    // TODO: add safe rules and connect to zodiac
    setCreateState(states.DONE);
  };

  return (
    <div className="bg-white bg-[#F2F2F2]">
      <div className="flex justify-center h-screen">
        <div className="flex w-full max-w-md px-6 mx-auto lg:w-3/5">
          <div className="flex-1 pt-20">
            {createState !== states.IDLE ? <p>{createState}</p>
              : (
                <>

                  <div>
                    <h2 className="text-4xl font-bold text-gray-700 dark:text-white">
                      Create project
                    </h2>

                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                      Tell the story of your science project to engage backers and
                      secure funding.
                    </p>
                  </div>

                  <div className="mt-8">
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label
                          htmlFor="text"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                          Title
                        </label>
                        <input
                          type="title"
                          name="text"
                          id="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="Title of project"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>

                      <div className="mt-6">
                        <div className="flex justify-between mb-2">
                          <label
                            htmlFor="password"
                            className="text-sm text-gray-600 dark:text-gray-200"
                          >
                            Description
                          </label>
                        </div>

                        <input
                          type="text"
                          name="description"
                          id="description"
                          placeholder="Description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="block w-full px-4 py-2 mt-2 mb-5 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="category"
                          className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        >
                          Choose a category
                        </label>
                        <select
                          id="category"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-2 mt-2"
                        >
                          <option value="healthcare">Healthcare</option>
                          <option value="ecology">Ecology</option>
                          <option value="biology">Biology</option>
                          <option value="physics">Physics</option>
                          <option value="genetics">Genetics</option>
                        </select>
                      </div>
                      <div className="mt-6">
                        <button onClick={mintProject} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 rounded-full">
                          Publish
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              )}
          </div>
        </div>
        <div
          className="hidden bg-cover lg:block lg:w-2/5"
          style={{ backgroundImage: "url('/create.jpeg')" }}
        />
      </div>
    </div>
  );
}
