'use client';
import { loadSingleYMLConfigCached } from '@/lib/ymlLoader';
import { useEffect, useState } from 'react';

type Hero = {
  title: {
    name: string;
    title1: string;
    title2: string;
  };
  feature: [{ title: string; description: string }];
  aboutMe: string[];
};
const AboutMe = () => {
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
    <div>
      {aboutMe.aboutMe.map((item) => (
        <div key={item} className="flex flex-col items-center justify-center py-3">
          <h3
            className="text-xl font-medium"
            dangerouslySetInnerHTML={{ __html: item }}
          ></h3>
        </div>
      ))}
    </div>
    // <div>
    //   <section>
    //     <Skills />
    //   </section>
    //   <section>
    //     <Timeline />
    //   </section>
    //   <section>
    //     <Portfolio />
    //   </section>
    // </div>
  );
};

export default AboutMe;
