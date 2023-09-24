import { usePrivy } from '@privy-io/react-auth';
import Link from 'next/link';

export default function Navbar() {
  const {
    login, ready, authenticated, logout,
  } = usePrivy();

  return (
    <div className="px-8 py-4 bg-white ">
      <div className="z-10 w-full items-center justify-between font-mono text-sm flex mx-auto">
        <Link href="/">
          <div className="flex items-center">
            <img src="/logo.svg" alt="logo" className="mr-2 h-10" />
          </div>
        </Link>
        <div className="flex items-center">
          {ready && authenticated ? (
            <>
              <div className="w-[120px] h-11 px-4 py-[8px] rounded-[50px] border border-gray-900 justify-center items-center gap-2.5 inline-flex">
                <Link href="/" className="mr-2">
                  Explore
                </Link>
              </div>
              <div className="w-[190px] h-11 px-4 py-[8px]  mx-8 rounded-[50px] border border-gray-900 justify-center items-center gap-2.5 inline-flex">
                <Link href="/create" className="mr-2">
                  Start A Project
                </Link>
              </div>
              <div className="w-[120px] h-11 px-4 py-[8px] rounded-[50px] border border-gray-900 justify-center items-center gap-2.5 inline-flex mr-8">
                <Link href="/profile">Profile</Link>
              </div>
              <button
                className="w-[120px] h-11 px-4 py-[8px]  bg-black text-white rounded-full px-4 py-2"
                onClick={logout}
              >
                Logout

              </button>
            </>
          ) : (
            <button
              onClick={login}
              className="bg-black text-white rounded-full px-4 py-2"
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
