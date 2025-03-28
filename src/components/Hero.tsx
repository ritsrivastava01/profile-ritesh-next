'use client';

import { loadArrayYMLConfig } from '@/lib/ymlLoader';
import { useEffect, useState } from 'react';

interface Experience {
  company: string;
  url: string;
  time: string;
  position: string;
  description: string;
}

const Hero = () => {
  const [config, setConfig] = useState<Experience[] | null>(null);
  useEffect(() => {
    const fetchAppConfig = async () => {
      try {
        const experienceData = await loadArrayYMLConfig<Experience>('experience'); // Specify the type as Experience
        console.log(experienceData);
        setConfig(experienceData);
      } catch (error) {
        console.error('Error loading YAML file:', error);
      }
    };

    fetchAppConfig();
  }, []);
  return (
    <section>
      {config &&
        config?.map((exp) => (
          <div key={exp.company} className="group relative mt-8">
            <h2 className="cursor-pointer">{exp.company}</h2>
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full"></div>
            <p>{exp.position}</p>
            <p>{exp.time}</p>
            <p>{exp.description}</p>
          </div>
        ))}
    </section>
  );
};

export default Hero;
