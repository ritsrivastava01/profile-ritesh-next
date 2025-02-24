import getConfig from 'next/config';
import Image from 'next/image';
// const isProd = process.env.NODE_ENV === 'production';
//const basePath = isProd ? '' : '';
// const imgSrc = `/images/img1.png`;
const { publicRuntimeConfig } = getConfig();
const imgSrc = `${publicRuntimeConfig.basePath}/images/img1.png`;

export default function Home() {
  console.log(imgSrc);
  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>Hello, World!</h1>

      <Image src={`${imgSrc}`} alt='img' width='64' height='64' />
    </main>
  );
}
