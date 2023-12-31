import { useRouter } from 'next/router'

export default function Project() {
  const router = useRouter()

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Profile Page</h1>
        <div>{router.query.id}</div>
      </div>
    </main>
  );
}
