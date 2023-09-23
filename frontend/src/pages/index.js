import { Inter } from "next/font/google";
import { usePrivy } from "@privy-io/react-auth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { login } = usePrivy();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <button onClick={login}>Login</button>
      </div>
    </main>
  );
}
