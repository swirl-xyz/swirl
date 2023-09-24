import { useRouter } from 'next/router';
import { useState } from 'react';
import ActivityFeed from '@/components/activityFeed';
import Modal from '@/components/modal';

export default function Project() {
  const router = useRouter();

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <main className="flex min-h-screen flex-col">
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <section className="relative py-22 bg-white">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden" />
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80" />
          </div>
          <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />
          <div
            className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <h1
              className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold text-gray-900"
            >
              Innovations in healthcare
            </h1>
            <div className="pt-5 opacity-50">Researchers:</div>
            <div className="flex items-center gap-2">
              <span>Dr. Lol</span>
              <img
                src="/art3.png"
                alt="Donor 3"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="mt-8 text-gray-700">
              Humora Pharmaceuticals is a groundbreaking biotechnology firm dedicated to enhancing human wellness and social harmony through the advancement of pioneering pharmaceutical solutions. At the heart of our mission is our flagship development—Humorax™, a revolutionary medication designed to instill a sense of humor in individuals. Our groundbreaking research is poised to transform the realms of mental health, social interaction, and even workplace efficiency.
            </div>
            {' '}
            <div className="mt-4 text-gray-700">
              We believe that humor is an untapped medicine that can transcend barriers, mend relationships, and significantly enhance quality of life. Our vision is to revolutionize the mental health landscape by providing a scientifically validated pathway to a happier, more resilient, and socially rewarding existence.
            </div>
            <div className="mt-4 text-gray-700">
              Our Products
              <br />
              - Humorax™: Our first-of-its-kind pill designed to activate specific neurotransmitters that trigger a genuine sense of humor.
              <br />
              - Humorax+ App: A complementary application that provides cognitive-behavioral exercises to sustain and enrich the effects of Humorax™.
              {' '}
            </div>
            <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0" />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col items-center lg:w-[465px] lg:h-[465px] lg:max-w-none lg:mx-0 mx-auto max-w-2xl">
              <img
                src="/art3.png"
                alt="Hero image"
                width="2350"
                height="2359"
                className="lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
              />

              <div className="flex justify-between w-full mt-4 bg-gray-50 rounded-[18.22px] px-4 py-2">
                <div>
                  <strong>Current Donations</strong>
                  <div>420 ETH</div>
                </div>
                <div>
                  <strong>Project Ends In</strong>
                  <div>369 days</div>
                </div>
              </div>

              <div className="flex sm:flex-row flex-col gap-5 w-full mt-4">
                <form
                  action="#"
                  className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 shadow-lg shadow-gray-200/20 border border-gray-200 bg-gray-100 rounded-full ease-linear focus-within:bg-white focus-within:border-blue-600"
                >
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder="Minimum donation 0.00001"
                    className="w-full py-3 outline-none bg-transparent"
                  />
                  <button
                    onClick={handleOpenModal}
                    className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]"
                  >
                    <span className="hidden sm:flex relative z-[5]">
                      Donate with ETH
                    </span>
                    <span className="flex sm:hidden relative z-[5]" />
                  </button>
                </form>
              </div>

              <div className="mt-4 flex items-start">
                <div className="text-lg font-semibold">Donors</div>
                <div className="flex gap-2 ml-4">
                  <img
                    src="/art5.jpeg"
                    alt="Donor 1"
                    className="w-10 h-10 rounded-full"
                  />
                  <img
                    src="/art7.jpeg"
                    alt="Donor 2"
                    className="w-10 h-10 rounded-full"
                  />
                  <img
                    src="/art8.jpeg"
                    alt="Donor 3"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="w-10 h-10 flex justify-center items-center bg-gray-300 rounded-full">
                    +70
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ActivityFeed />
    </main>
  );
}
