import { useState } from "react";

export default function Project() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, category);
  };

  return (
    <div class='bg-white bg-[#F2F2F2]'>
      <div class='flex justify-center h-screen'>
        <div class='flex w-full max-w-md px-6 mx-auto lg:w-3/5'>
          <div class='flex-1 pt-20'>
            <div>
              <h2 class='text-4xl font-bold text-gray-700 dark:text-white'>
                Create project
              </h2>

              <p class='mt-3 text-gray-500 dark:text-gray-300'>
                Tell the story of your science project to engage backers and
                secure funding.
              </p>
            </div>

            <div class='mt-8'>
              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    for='text'
                    class='block mb-2 text-sm text-gray-600 dark:text-gray-200'
                  >
                    Title
                  </label>
                  <input
                    type='title'
                    name='text'
                    id='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Title of project'
                    class='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                  />
                </div>

                <div class='mt-6'>
                  <div class='flex justify-between mb-2'>
                    <label
                      for='password'
                      class='text-sm text-gray-600 dark:text-gray-200'
                    >
                      Description
                    </label>
                  </div>

                  <input
                    type='text'
                    name='description'
                    id='description'
                    placeholder='Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    class='block w-full px-4 py-2 mt-2 mb-5 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                  />
                </div>
                <div>
                  <label
                    for='category'
                    class='block mb-2 text-sm text-gray-600 dark:text-gray-200'
                  >
                    Choose a category
                  </label>
                  <select
                    id='category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-2 mt-2'
                  >
                    <option value='healthcare'>Healthcare</option>
                    <option value='ecology'>Ecology</option>
                    <option value='biology'>Biology</option>
                    <option value='physics'>Physics</option>
                    <option value='genetics'>Genetics</option>
                  </select>
                </div>

                <div class='mt-6'>
                  <button class='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 rounded-full'>
                    Publish
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          class='hidden bg-cover lg:block lg:w-2/5'
          style={{ backgroundImage: "url('/create.jpeg')" }}
        ></div>
      </div>
    </div>
  );
}
