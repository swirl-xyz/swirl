import { ethers } from 'ethers';
import { useWallets } from '@privy-io/react-auth';
import { TokenboundClient } from '@tokenbound/sdk';
import { EthersAdapter, SafeFactory } from '@safe-global/protocol-kit';
import { Inter } from 'next/font/google';
import ProjectSection from '../components/projectSection';
import unlockClient from '../clients/unlock';
import abi from '../../contracts/abis/ProjectAccount.json';
import useWeb3Provider from '../hooks/useWeb3Provider';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { wallets } = useWallets();
  const { web3Provider } = useWeb3Provider();

  // TO DO: add our own metadata
  const tokenURI = 'https://chocolate-objective-giraffe-337.mypinata.cloud/ipfs/Qmefgi96NSNCJFrUHWuPH67Y6kuk8KMayb9vZGgzVYLNtg?_gl=1*1isypq3*rs_ga*MTc4MjMzNjM0NC4xNjg0NTc2MTI4*rs_ga_5RMPXG14TE*MTY4NDU3NjEyOC4xLjEuMTY4NDU3NjE3MS4xNy4wLjA.';
  // const { wallets } = useWallets();
  // const embeddedWallet = wallets.find(
  //   (wallet) => wallet.walletClientType === 'privy',
  // );

  const mintProject = async () => {
    // const provider = await embeddedWallet.getEthereumProvider();
    // const signer = provider.getSigner()

    const provider = new ethers.providers.JsonRpcProvider();
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const contract = new ethers.Contract('0x67d269191c92Caf3cD7723F116c85e6E9bf55933', abi, signer);
    await contract.mint(address, tokenURI);
    const tokenID = await contract.getTokenID();
    const chainID = await signer.getChainId();
    const tokenboundClient = new TokenboundClient({ signer, chainId: chainID });
    const tokenBoundAccount = tokenboundClient.getAccount({
      tokenContract: '0x67d269191c92Caf3cD7723F116c85e6E9bf55933',
      tokenId: ethers.BigNumber.from(tokenID).toNumber(),
    });
    console.log('Token bound account created!', tokenBoundAccount);

    const ethAdapter = new EthersAdapter({
      ethers,
      signerOrProvider: signer,
    });

    const safeFactory = await SafeFactory.create({ ethAdapter });
    const safeAccountConfig = {
      owners: [
        await signer.getAddress(),

      ],
      threshold: 1,
    };
    const safeSdkOwner1 = await safeFactory.deploySafe({ safeAccountConfig });
    const safeAddress = await safeSdkOwner1.getAddress();

    console.log('Your Safe has been deployed:');
    console.log(`https://goerli.etherscan.io/address/${safeAddress}`);
    console.log(`https://app.safe.global/gor:${safeAddress}`);
  };

  const createLock = async () => {
    const [userWallet] = wallets;

    if (!userWallet) {
      return;
    }

    const result = await unlockClient.createLock({
      userWallet,
    });
  };

  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>

      {/* DEBUG */}
      {/* <button type="button" onClick={createLock}>Get lock</button> */}

      <section
        className="relative py-28 bg-white bg-center bg-cover"
        style={{ backgroundImage: "url('/hero.jpeg')" }}
      >
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden" />
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80" />
          </div>
          <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />
          <div
            className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <h1
              className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold text-white "
            >
              Vote, empower and fund scientific discoveries
            </h1>
            <p className="mt-8 text-white">
              A novel approach to peer to peer scientific funding with direct
              democratic participation
            </p>
            <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
              <div className="flex sm:flex-row flex-col gap-5 w-full">
                <form
                  action="#"
                  className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 shadow-lg shadow-gray-200/20
                            border border-gray-200 bg-gray-100 rounded-full ease-linear focus-within:bg-white  focus-within:border-blue-600"
                >
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="Search projects"
                    className="w-full py-3 outline-none opacity-60"
                  />
                  <button
                    className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                                after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-black border-transparent hover:border-[#172554]"
                  >
                    <span className="hidden sm:flex relative z-[5]">Search</span>
                    <span className="flex sm:hidden relative z-[5]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl" />
        </div>
      </section>
      <section>
        <ProjectSection />
      </section>
    </main>
  );
}
