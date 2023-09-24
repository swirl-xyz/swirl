import { ethers } from 'ethers';

const abis = require('@unlock-protocol/contracts');

const UNLOCK_FACTORY_CONTRACT_ADDRESS = '0x627118a4fB747016911e5cDA82e2E77C531e8206'; // goerli contract address

class UnlockClient {
  async getLock() {
    const provider = new ethers.providers.JsonRpcProvider(
      'https://rpc.unlock-protocol.com/5',
    );

    const address = '0x09A8F16Ed16C28f4774aBF73eCc071cfB423Ac24';

    const lock = new ethers.Contract(address, abis.PublicLockV11.abi, provider);

    const [lockSymbol, lockName] = await Promise.all([
      lock.symbol(),
      lock.name(),
    ]);

    return {
      lockSymbol,
      lockName,
    };
  }

  async createLock({ userWallet }) {
    try {
      const provider = await userWallet.getEthersProvider();
      const signer = await provider.getSigner();

      const unlockContract = new ethers.Contract(
        UNLOCK_FACTORY_CONTRACT_ADDRESS,
        abis.UnlockV11.abi,
        signer,
      );

      const lockInterface = new ethers.utils.Interface(abis.PublicLockV11.abi);

      const params = lockInterface.encodeFunctionData(
        'initialize(address,uint256,address,uint256,uint256,string)',
        [
          userWallet.address,
          31 * 60 * 60 * 24, // 30 days in seconds
          ethers.constants.AddressZero, // We use the base chain currency
          ethers.utils.parseUnits('0.01', 18), // 0.01 Eth
          1000,
          'New Membership',
        ],
      );

      const transaction = await unlockContract.createUpgradeableLockAtVersion(params, 11);

      const receipt = await transaction.wait();
      const lockAddress = receipt.logs[0].address;

      localStorage.setItem(userWallet.address, lockAddress);

      return lockAddress;
    } catch (error) {
      console.error('Error: [Clients/Unlock]', error);

      return error;
    }
  }

  createKey() {}

  getKeys() {

  }
}

export default new UnlockClient();
