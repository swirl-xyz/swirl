import { usePrivy } from "@privy-io/react-auth";
import Link from 'next/link';

export default function Navbar() {
  const { login, ready, authenticated } = usePrivy();

  return (
    <div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        { (ready && authenticated) ? (
          <>
            <Link href="/">Explore</Link>
            <Link href="/create">Start A Project</Link>
            <Link href="/profile">Profile</Link>
          </>
          ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    </div>
  )
}
