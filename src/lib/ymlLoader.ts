import yaml from 'js-yaml';

async function loadConfig<T extends Record<string, unknown>>(
  filePath: string,
): Promise<T> {
  try {
    const basePath = process.env.__NEXT_ROUTER_BASEPATH ?? '';
    const configPath = `${basePath}${filePath}`;
    const res = await fetch(configPath);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const text = await res.text();
    return yaml.load(text) as T;
  } catch (error) {
    console.error(`Error loading config from ${filePath}:`, error);
    throw error;
  }
}

export default loadConfig;
