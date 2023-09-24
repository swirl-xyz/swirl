import { useState } from "react";

export default function ActivityFeed() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [isDonor, setIsDonor] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, category);
  };
  return (
    <section class='bg-[#F7FBFA] flex justify-center items-center flex-col'>
      <div className='text-stone-950 text-2xl font-bold  leading-loose text-left py-10'>
        Activity feed
      </div>
      <div className='flex'>
        <div className='flex flex-col items-center gap-4 flex-grow-3'>
          <div className='w-[643px] h-[413px] bg-zinc-100 rounded-[30px] p-6'>
            <div className='flex items-start justify-between w-full'>
              <div className='flex flex-col items-start gap-2'>
                <div className="w-[362px] text-black text-[38px] font-normal font-['OT Brut'] leading-[48px]">
                  Whales, drones, satellite tags, success!
                </div>
                <div className='w-[539px] h-[95px]'>
                  <span className='text-zinc-900 text-[15px] font-medium  leading-normal'>
                    It is hard to express how excited we are with regards to the
                    success that we had during our recent expedition to Mexico.
                    We’ve been working on a new
                  </span>
                  <span className='text-zinc-900 text-[15px] font-medium  leading-normal'>
                    Drones for Whale Research
                  </span>
                  <span className='text-zinc-900 text-[15px] font-medium  leading-normal my-5'>
                    tool for the past several months, but I haven’t wanted to
                    tell you about them until we tested them in the field. Well,
                    we tested them...
                  </span>
                </div>
                <div className='w-[138px] h-11 px-7 py-[13px] rounded-[50px] border border-gray-900 justify-center items-center gap-2.5 inline-flex mt-10'>
                  <div className='text-center text-gray-900 text-base font-medium  leading-normal'>
                    Read more
                  </div>
                </div>
              </div>
              <div className='opacity-50 text-zinc-900 text-base font-medium  leading-normal'>
                Yesterday
              </div>
            </div>
          </div>
          <div className='w-[643px] h-[413px] bg-zinc-100 rounded-[30px] p-6'>
            <div className='flex items-start justify-between w-full'>
              <div className='flex flex-col items-start gap-2'>
                <div className="w-[362px] text-black text-[38px] font-normal font-['OT Brut'] leading-[48px]">
                  Whales, drones, satellite tags, success!
                </div>
                <div className='w-[539px] h-[95px]'>
                  <span className='text-zinc-900 text-[15px] font-medium  leading-normal'>
                    It is hard to express how excited we are with regards to the
                    success that we had during our recent expedition to Mexico.
                    We’ve been working on a new
                  </span>
                  <span className='text-zinc-900 text-[15px] font-medium  leading-normal'>
                    Drones for Whale Research
                  </span>
                  <span className='text-zinc-900 text-[15px] font-medium  leading-normal'>
                    tool for the past several months, but I haven’t wanted to
                    tell you about them until we tested them in the field. Well,
                    we tested them...
                  </span>
                </div>
                <div className='w-[138px] h-11 px-7 py-[13px] rounded-[50px] border border-gray-900 justify-center items-center gap-2.5 inline-flex mt-10'>
                  <div className='text-center text-gray-900 text-base font-medium  leading-normal'>
                    Read more
                  </div>
                </div>
              </div>
              <div className='opacity-50 text-zinc-900 text-base font-medium  leading-normal'>
                Yesterday
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center gap-4 flex-grow-2 ml-6'>
          {isDonor ? (
            <div className='w-[467px] h-[508px] bg-white rounded-[30px] shadow-xl shadow-orange-600/50 border border-orange-600'>
              <div class='mt-8 px-8'>
                <h2 class='text-4xl font-bold text-gray-700 py-4'>
                  Withdrawal Request
                </h2>
                <div className='text-stone-950 text-[27.11px] font-bold leading-[18.59px]'>
                  2.5 ETH
                </div>
                <div className=' text-stone-950 text-[22px] font-medium leading-[18.59px] py-10'>
                  New Drone Fleet for Whales
                </div>
                <div className="w-96 text-stone-950 text-[17px] font-medium font-['Inter'] leading-normal pb-10">
                  We will be purchasing new drones to collect photogrammetry
                  data on whales to determine the animals' body condition, and
                  we'll be deploying a fixed-wing UAV as we continue trying to
                  develop a cost-effective, autonomous tool for conducting
                  distribution surveys of marine mammals.
                </div>
                <div className='w-[153px] h-11 px-7 py-[13px] rounded-[50px] border border-gray-900 justify-center items-center gap-2.5 inline-flex'>
                  <div className="text-center text-gray-900 text-base font-medium font-['Inter'] leading-normal">
                    ❌ Deny
                  </div>
                </div>
                <div className='w-[153px] h-11 px-7 py-[13px] bg-stone-950 rounded-[50px] border border-gray-900 justify-center items-center gap-2.5 inline-flex mx-10'>
                  <div className="text-center text-white text-base font-bold font-['Inter'] leading-normal">
                    👍 Approve
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='w-[467px] h-[490px] bg-white rounded-[30px] shadow-md border border-purple-700 shadow-xl  shadow-purple-700/50 hover:border-opacity-75 transition-shadow transition-border'>
              <div class='mt-8 px-8'>
                <h2 class='text-4xl font-bold text-gray-700 py-4'>
                  Withdrawal Request
                </h2>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label for='text' class='block mb-2 text-sm text-gray-600'>
                      Reason
                    </label>
                    <input
                      type='title'
                      name='text'
                      id='text'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder='Why do you want to withdraw?'
                      class='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dfocus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                  </div>
                  <div class='mt-6'>
                    <div class='flex justify-between mb-2'>
                      <label for='password' class='text-sm text-gray-600'>
                        Details
                      </label>
                    </div>

                    <input
                      type='text'
                      name='description'
                      id='description'
                      placeholder='Add more information about your withdraw'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      class='block w-full px-4 py-2 mt-2 mb-5 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                  </div>
                  <div class='mt-6'>
                    <div class='flex justify-between mb-2'>
                      <label for='password' class='text-sm text-gray-600'>
                        Amount
                      </label>
                    </div>

                    <input
                      type='text'
                      name='description'
                      id='description'
                      placeholder='Amount in eth you like to withdraw'
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      class='block w-full px-4 py-2 mt-2 mb-5 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                  </div>
                  <div class='mt-6'>
                    <button class='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 rounded-full'>
                      Request withdrawal with eth
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          <div className='text-stone-950 text-2xl font-bold leading-loose'>
            History
          </div>
          <div className='w-[460px] h-[146px] bg-zinc-100 rounded-[30px] border p-7 space-y-4'>
            <div className='w-[67px] h-[26px] px-2.5 py-[3px] bg-neutral-400 rounded justify-center items-center gap-px inline-flex'>
              <div className='text-white text-xs font-medium leading-tight'>
                Pending
              </div>
            </div>
            <div className='text-stone-950 text-[27.11px] font-bold leading-[18.59px]'>
              2.5 ETH
            </div>
            <div className='w-[266px] text-stone-950 text-lg font-medium leading-[18.59px] mb-10'>
              New Drone Fleet for Whales
            </div>
          </div>

          <div className='w-[460px] h-[146px] bg-zinc-100 rounded-[30px] border p-7 space-y-4'>
            <div className='w-[67px] h-[26px] px-2.5 py-[3px] bg-teal-500 rounded justify-center items-center gap-px inline-flex'>
              <div className='text-white text-xs font-medium leading-tight'>
                Approved
              </div>
            </div>
            <div className='text-stone-950 text-[27.11px] font-bold leading-[18.59px]'>
              2.5 ETH
            </div>
            <div className='w-[266px] text-stone-950 text-lg font-medium leading-[18.59px]'>
              New Drone Fleet for Whales
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
