import { useRouter } from 'next/router';
import { useWallets } from '@privy-io/react-auth';

import useWeb3Provider from '../../hooks/useWeb3Provider';
import proposalsClient from '../../clients/proposals';

export default function Project() {
  const router = useRouter();
  const { wallets } = useWallets();
  const { web3Provider } = useWeb3Provider();

  const vote = (choice) => {
    const userWallet = wallets[0];

    if (!userWallet) {
      return;
    }

    const choiceId = {
      yes: 1,
      no: 2,
      abstain: 3,
    }[choice];

    proposalsClient.vote({
      web3Provider,
      userWalletAddress: userWallet.address,
      proposalId: '0x6c2447dbd53ada4c31ced0391b883bf890e7eb355b2d9b274de5b1c715adef78',
      choiceId,
    });
  };

  const createProposal = () => {
    proposalsClient.create({

    });
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>
          Project:
          {' '}
          {router.query.id}
        </h1>
      </div>
      <button type="button" onClick={() => vote('yes')}>Vote yes</button>
      <button type="button" onClick={() => vote('no')}>Vote No</button>
      <button type="button" onClick={() => vote('abstain')}>Abstain</button>
      <button type="button" onClick={() => createProposal()}>Create Withdrawal Request</button>
    </main>
  );
}
