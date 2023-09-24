import ethers from 'ethers';
import abis from '@unlock-protocol/contracts';

class UnlockClient {
  async getLock() {
    const provider = new ethers.providers.JsonRpcProvider(
      'https://rpc.unlock-protocol.com/5',
    );

    const address = '0x09A8F16Ed16C28f4774aBF73eCc071cfB423Ac24';

    const lock = new ethers.Contract(address, abis.PublicLockV11.abi, provider);

    console.log(await lock.symbol());
    console.log(await lock.name());
  }

  createKey() {

  }
}

export default new UnlockClient();
