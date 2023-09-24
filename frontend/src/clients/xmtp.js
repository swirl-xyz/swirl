import { ethers } from 'ethers';
import { Client } from '@xmtp/xmtp-js';

class XMTPClient {
  async sendMessage(eoaAddress, wallet, message) {
    const xmtp = await Client.create(wallet, { env: 'dev' });
    const isOnProdNetwork = await xmtp.canMessage(eoaAddress);
    if (isOnProdNetwork) {
      const conversation = await xmtp.conversations.newConversation(eoaAddress);
      const msg = await conversation.send(message);
      console.log('Message sent', msg);
    } else {
      console.log('User not available');
    }
  }

  sendMessage() {}
}

export default new XMTPClient();
