import { useRouter } from 'next/router';
import { useState } from 'react';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { ethers } from 'ethers';
import { WalletService } from '@unlock-protocol/unlock-js';
import ActivityFeed from '@/components/activityFeed';
import Modal from '@/components/modal';

export default function Project() {
  const router = useRouter();
  const {
    authenticated,
  } = usePrivy();
  const { wallets } = useWallets();
  const networks = {
    4: {
      unlockAddress: '0x627118a4fB747016911e5cDA82e2E77C531e8206', // Smart contracts docs include all addresses on all networks
      provider: 'https://rpc.unlock-protocol.com/5',
    },
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const [loading, setLoading] = useState(false);
  const [depositAmount, setDepositAmount] = useState(0.001);

  const handleDonate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const provider = await wallets[0]?.getEthersProvider();
    const signer = await provider?.getSigner();
    const safeAddress = localStorage.getItem('safe');
    const amount = depositAmount.toString();
    const safeAmount = ethers.utils.parseUnits(amount, 'ether').toHexString();
    const transactionParameters = {
      to: '0x8C0Efe2C9c70eE385e21a7800081f6079A6fadA9',
      // to: safeAddress
      value: safeAmount,
    };
    const tx = await signer.sendTransaction(transactionParameters);
    tx.wait().then((receipt) => {
      if (receipt.status === 1) {
        console.log('Transaction confirmed');
        setModalOpen(true);
      }
      setLoading(false);
    });


    // TODO: deposit unlock keys w/ lock address
    const walletService = new WalletService(networks);
    await walletService.connect(provider, wallets[0]);
    // const lockAddress = localStorage.getItem('lock');
    await walletService.purchaseKey(
      {
        "0x15884a642ed752f64f507b40ac2def2104eb3514"
      },
      {}, // transaction options
      (error, hash) => {
        console.log({ hash });
      },
    );

  };

  return (
    <main className="flex min-h-screen flex-col">
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} loading={loading} />
      <section className="relative py-22 bg-white">
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
            font-bold text-gray-900"
            >
              Whale Research with Drones
            </h1>
            <div className="pt-5 opacity-50">Researchers:</div>
            <div className="flex items-center gap-2">
              <img
                src="/art4.png"
                alt="Donor 3"
                className="w-10 h-10 rounded-full"
              />
              <span>Paige Jones &</span>
              <img
                src="/art3.png"
                alt="Donor 3"
                className="w-10 h-10 rounded-full"
              />
              <span>Mariana Oka</span>
            </div>
            <div className="mt-8 text-gray-700">
              We need your help to fund the purchase and construction of new
              drones, expeditions into the field to collect samples, and data
              analysis and dissemination. By funding this work you are
              supporting the development of a new data collection tool that will
              be easily replicable by others as well as the collection of
              critical data that is of benefit to whales and ultimately
              humanity.
            </div>
            {' '}
            <div className="mt-4 text-gray-700">
              We need your help to fund the purchase and construction of new
              drones, expeditions into the field to collect samples, and data
              analysis and dissemination. By funding this work you are
              supporting the development of a new data collection tool that will
              be easily replicable by others as well as the collection of
              critical data that is of benefit to whales and ultimately
              humanity. We need your help to fund the purchase and construction
              of new drones, expeditions into the field to collect samples, and
              data analysis and dissemination.
              {' '}
            </div>
            <div className="mt-4 text-gray-700">
              By funding this work you are supporting the development of a new
              data collection tool that will be easily replicable by others as
              well as the collection of critical data that is of benefit to
              whales and ultimately humanity. We need your help to fund the
              purchase and construction of new drones, expeditions into the
              field to collect samples, and data analysis and dissemination. By
              funding this work you are supporting the development of a new data
              collection tool that will be easily replicable by others as well
              as the collection of critical data that is of benefit to whales
              and ultimately humanity.
            </div>
            <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0" />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col items-center lg:w-[465px] lg:h-[465px] lg:max-w-none lg:mx-0 mx-auto max-w-2xl">
              <img
                src="/art1.svg"
                alt="Hero image"
                width="2350"
                height="2359"
                className="lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
              />

              <div className="flex justify-between w-full mt-4 bg-gray-50 rounded-[18.22px] px-4 py-2">
                <div>
                  <strong>Current Donations</strong>
                  <div>12 ETH</div>
                </div>
                <div>
                  <strong>Project Ends In</strong>
                  <div>10 days</div>
                </div>
              </div>
              {loading ? <p>Loading...</p> : (
                <div className="flex sm:flex-row flex-col gap-5 w-full mt-4">
                  <form
                    onSubmit={handleDonate}
                    action="#"
                    className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 shadow-lg shadow-gray-200/20 border border-gray-200 bg-gray-100 rounded-full ease-linear focus-within:bg-white focus-within:border-blue-600 z-5"
                  >
                    <input
                      type="text"
                      name="depositAmount"
                      id="depositAmount"
                      placeholder="Minimum donation 0.00001"
                      className="w-full py-3 outline-none bg-transparent z-50"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                    />
                    <button
                      type="submit"
                      disabled={!authenticated || isModalOpen}
                    // onClick={handleOpenModal}
                      className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="hidden sm:flex relative z-[5]">
                        Donate with ETH
                      </span>
                      <span className="flex sm:hidden relative z-[5]" />
                    </button>
                  </form>
                </div>
              ) }

              <div className="mt-4 flex items-start">
                <div className="text-lg font-semibold">Donors</div>
                <div className="flex gap-2 ml-4">
                  <img
                    src="/art5.jpeg"
                    alt="Donor 1"
                    className="w-10 h-10 rounded-full"
                  />
                  <img
                    src="/art7.jpeg"
                    alt="Donor 2"
                    className="w-10 h-10 rounded-full"
                  />
                  <img
                    src="/art8.jpeg"
                    alt="Donor 3"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="w-10 h-10 flex justify-center items-center bg-gray-300 rounded-full">
                    +70
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ActivityFeed />
    </main>
  );
}
