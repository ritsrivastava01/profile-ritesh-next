import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const imgSrc = `${basePath}/images/img1.png`;

export default function Home() {
  console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
  console.log('NEXT_PUBLIC_BASE_PATH:', process.env.NEXT_PUBLIC_BASE_PATH);
  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>Hello, World!</h1>

      <Image src={`${imgSrc}`} alt='img' width='64' height='64' />
    </main>
  );
}
