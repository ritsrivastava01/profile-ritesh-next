import yaml from 'js-yaml';
import { getStaticPathWithBasePath } from './getPath';
async function loadArrayYMLConfig<T = unknown>(file: string): Promise<T[]> {
  const filePath = getStaticPathWithBasePath(file);
  try {
    const res = await fetch(`/${filePath}.yml`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const text = await res.text();
    const data: unknown = yaml.load(text);
    if (Array.isArray(data)) {
      return data;
    } else {
      console.warn(`Unexpected data structure in ${filePath}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading config from ${filePath}:`, error);
    throw error;
  }
}

async function loadSingleYMLConfig<T = unknown>(file: string): Promise<T> {
  const filePath = getStaticPathWithBasePath(file);

  try {
    const res = await fetch(filePath);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const text = await res.text();
    const data = yaml.load(text) as T;

    if (Array.isArray(data)) {
      console.warn(`Unexpected data structure in ${filePath}`);
      return '' as T;
    } else {
      return data;
    }
  } catch (error) {
    console.error(`Error loading config from ${filePath}:`, error);
    throw error;
  }
}

export { loadArrayYMLConfig, loadSingleYMLConfig };
