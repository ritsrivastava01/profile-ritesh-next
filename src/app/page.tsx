import Image from 'next/image';

const basePath = process.env.BASE_PATH ?? '';

const imgSrc = `${basePath}/images/img1.png`;

export default function Home() {
  console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
  console.log('BASE_PATH:', process.env.BASE_PATH);
  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>Hello, World!</h1>

      <Image src={`${imgSrc}`} alt='img' width='64' height='64' />
    </main>
  );
}
