import { useState, useEffect } from 'react';
import { Web3Provider } from '@ethersproject/providers';

export default function useWeb3Provider() {
  const [web3Provider, setWeb3Provider] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const metamask = new Web3Provider(window.ethereum);
      setWeb3Provider(metamask);
    }
  }, []);

  return {
    web3Provider,
  };
}
