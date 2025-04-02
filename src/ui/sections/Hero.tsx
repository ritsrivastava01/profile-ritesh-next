'use client';
import { loadSingleYMLConfigCached } from '@/lib/ymlLoader';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// interface Experience {
//   company: string;
//   url: string;
//   time: string;
//   position: string;
//   description: string;
// }

type Hero = {
  title: {
    name: string;
    title1: string;
    title2: string;
  };
  feature: [{ title: string; description: string }];
  aboutMe: string[];
};

const Hero = () => {
  const [aboutMe, setAboutMe] = useState<Hero | null>(null);
  useEffect(() => {
    const fetchHeroYml = async () => {
      try {
        setAboutMe(await loadSingleYMLConfigCached<Hero>('/about.yml'));
      } catch (error) {
        console.error('Error loading YAML file:', error);
      }
    };

    fetchHeroYml();
  }, []);

  if (!aboutMe) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      {aboutMe && (
        <div className="flex flex-col justify-center">
          <Image
            src="https://avatars3.githubusercontent.com/u/11472028?s=460&v=4"
            alt="img"
            width={300}
            height={300}
            className="rounded-full border-4 border-slate-400 bg-amber-50 shadow-lg"
          />

          <h1
            className="pt-4 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"
            dangerouslySetInnerHTML={{ __html: aboutMe.title.name }}
          ></h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            {aboutMe.title.title1}
          </h2>
          <h3 className="mt-4 max-w-xs leading-normal">{aboutMe.title.title2}</h3>
        </div>
      )}
    </section>
  );
};

export default Hero;
