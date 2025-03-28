'use client';
import { useEffect, useState } from 'react';

const Test = () => {
  const [config, setConfig] = useState<string | null>(null);
  useEffect(() => {
    const fetchAppConfig = async () => {
      try {
        const basePath = process.env.__NEXT_ROUTER_BASEPATH ?? '';
        const configPath = `${basePath}/config.yml`;
        console.log(configPath);
        const res = await fetch(configPath);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const text = await res.text();
        console.log('YAML file content:', text);
        setConfig(text);
      } catch (error) {
        console.error('Error loading YAML file:', error);
      }
    };

    fetchAppConfig();
  }, []);
  return <div>From Yml-- {config}</div>;
};

export default Test;
