export const getStaticPathWithBasePath = (path: string) => {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH ?? '';
  return `${basePath}${path}`;
};
