import { useEffect } from 'react';
import { useRouter } from 'next/router';

import proposalsClient from '../../clients/proposals';

export default function Project() {
  const router = useRouter();

  useEffect(() => {
    proposalsClient.get('0x0cb5e1a954fc2cd83d2b4b382b17f7d621f1e47c7e8c2e8fcc5df38d6a3fa74e');
  }, []);

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
    </main>
  );
}
