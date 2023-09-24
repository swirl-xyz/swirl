import { useState } from 'react';
import Link from 'next/link';

const projects = [
  {
    title: 'Whale research with drones',
    author: 'Patrick Stewart',
    image: '/art1.svg',
    category: 'biology',
  },
  {
    title: 'Trends in Quantum Physics',
    author: 'Author B',
    image: '/art2.png',
    category: 'physics',
  },
  {
    title: 'Innovations in Healthcare',
    author: 'Author C',
    image: '/art3.png',
    category: 'healthcare',
  },
  {
    title: 'Sustaining the Earth: Ecology Projects',
    author: 'Author D',
    image: '/art4.png',
    category: 'ecology',
  },
  {
    title: 'Decoding Life: Genetics Research',
    author: 'Author E',
    image: '/art5.jpeg',
    category: 'genetics',
  },
  {
    title: 'Open Source Prototyping for Biology',
    author: 'McGill University',
    image: '/art6.jpeg',
    category: 'biology',
  },
  {
    title: 'Coronary Artery Disease in Women Research',
    author: 'Jane Hopkins',
    image: '/art7.jpeg',
    category: 'trending',
  },
  {
    title: 'Radiation Detection Hardware Network in Japan',
    author: 'Satoshi Nakamoto',
    image: '/art8.jpeg',
    category: 'trending',
  },
];

function Card({
  title, author, image, index,
}) {
  return (
    <div className="w-[302px] h-[450px] relative">
      <div className="w-[302px] h-[450px] left-0 top-0 absolute rounded-2xl border border-neutral-300 border-opacity-60" />
      <div className="w-[230px] left-[36px] top-[339px] absolute text-center text-black text-lg font-extrabold font-['Inter'] leading-normal">
        {title}
      </div>
      <div className="w-[250px] pt-[27px] left-[26px] top-[372px] absolute justify-center items-center inline-flex">
        <div className="w-[296px] text-center text-zinc-600 text-sm font-normal font-['Inter'] leading-[21px]">
          by
          {' '}
          {author}
        </div>
      </div>
      <Link
        href={`/projects/${index}`}
      >
        <img
          className="w-[302px] h-[302px] left-0 top-0 absolute rounded-tl-[10px] rounded-tr-[10px]"
          src={image}
        />
      </Link>
    </div>
  );
}

function FilterButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 m-1 border border-gray-400 rounded-full 
                   ${
                     active
                       ? 'bg-[#7A52F4] text-white'
                       : 'text-[#7A52F4] bg-white'
                   }`}
    >
      {label}
    </button>
  );
}

export default function ProjectPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    'all',
    'trending',
    'healthcare',
    'ecology',
    'biology',
    'physics',
    'genetics',
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="py-5 bg-white">
      <h3 className="px-10 text-xl font-extrabold">Explore Projects</h3>
      <div className="flex px-10 py-5">
        {categories.map((category) => (
          <FilterButton
            key={category}
            label={category.charAt(0).toUpperCase() + category.slice(1)}
            active={activeFilter === category}
            onClick={() => setActiveFilter(category)}
          />
        ))}
      </div>

      <div className="flex justify-center items-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl items-start">
          {filteredProjects.map((project, index) => (
            <Card
              index={index}
              key={project.title}
              title={project.title}
              author={project.author}
              image={project.image}
              category={project.category}
              className={index === 0 ? 'first-card' : ''}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
