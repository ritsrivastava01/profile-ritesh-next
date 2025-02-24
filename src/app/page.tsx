import Image from 'next/image';
// const isProd = process.env.NODE_ENV === 'production';
//const basePath = isProd ? '' : '';
// const imgSrc = `/images/img1.png`;

const basePath = process.env.BASE_PATH ?? '';

const imgSrc = `${basePath}/images/img1.png`;

export default function Home() {
  console.log(basePath, process.env.NODE_ENV);
  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>Hello, World!</h1>

      <Image src={`${imgSrc}`} alt='img' width='64' height='64' />
    </main>
  );
}
