import { usePrivy } from "@privy-io/react-auth";
import Link from "next/link";

export default function Navbar() {
  const { login, ready, authenticated, logout } = usePrivy();

  return (
    <div className='p-4 bg-white'>
      <div className='z-10 w-full items-center justify-between font-mono text-sm flex mx-auto'>
        <div className='flex items-center'>
          <img src='/logo.svg' alt='logo' className='mr-2 h-10' />
        </div>
        <div className='flex items-center'>
          {ready && authenticated ? (
            <>
              <Link href='/' className='mr-2'>
                Explore
              </Link>
              <Link href='/create' className='mr-2'>
                Start A Project
              </Link>
              <Link href='/profile'>Profile</Link>
              <button onClick={logout}>Log out</button>
            </>
          ) : (
            <button
              onClick={login}
              className='bg-black text-white rounded-full px-4 py-2'
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
