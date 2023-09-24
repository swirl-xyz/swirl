import Link from 'next/link';

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 z-10">
      <div className="flex items-end justify-center min-h-screen">
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={onClose}
        />

        <div className="bg-white p-6 rounded shadow-lg relative">
          <button onClick={onClose} className="absolute top-2 right-2 text-lg">
            &times;
          </button>
          <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
            <div className="w-full">
              <div className="m-8 my-20 max-w-[400px] mx-auto">
                <div className="mb-8">
                  <h1 className="mb-4 text-3xl font-extrabold">
                    Thanks for your contribution
                  </h1>
                  <p className="text-gray-600">
                    You’re an official contributor and your NFT is minting! Keep
                    an eye out for voting rounds and project updates.
                  </p>
                </div>
                <div className="space-y-4">
                  <Link
                    href="/"
                    class="p-3 bg-black rounded-full text-white w-full font-semibold"
                  >
                    Back to projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
