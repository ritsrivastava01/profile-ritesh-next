'use client';
import { loadSingleYMLConfig } from '@/lib/ymlLoader';
import { useEffect, useState } from 'react';

interface AppConfig {
  app: { port: number; environment: string };
  database: {
    host: string;
    port: number;
    name: string;
  };
}
const Test = () => {
  const [config, setConfig] = useState<AppConfig | null>(null);
  useEffect(() => {
    const fetchAppConfig = async () => {
      try {
        const experienceData = await loadSingleYMLConfig<AppConfig>('config'); // Specify the type as Experience
        setConfig(experienceData);
      } catch (error) {
        console.error('Error loading YAML file:', error);
      }
    };

    fetchAppConfig();
  }, []);
  return (
    <div>{config?.app.port}</div>
    // <div>
    //   <div className="group relative">
    //     <h2 className="cursor-pointer">About Me</h2>
    //     <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full"></div>
    //   </div>

    //   <div className="group relative mt-8">
    //     <h2 className="cursor-pointer">Experience</h2>
    //     <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full"></div>
    //   </div>

    //   <button className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 hover:text-gray-100">
    //     Click Me
    //   </button>

    //   <a
    //     href="#"
    //     className="cursor-pointer text-indigo-500 hover:text-indigo-700 hover:underline"
    //   >
    //     Learn More
    //   </a>

    //   <div className="cursor-pointer rounded bg-gray-100 p-4 hover:bg-gray-200">
    //     Hoverable Div
    //   </div>

    //   <div className="group relative mt-8">
    //     <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-60"></div>
    //     <div className="absolute bottom-4 left-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    //       <a href="#" className="rounded-md bg-indigo-500 px-4 py-2 text-white">
    //         View Project
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Test;
