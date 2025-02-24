import Image from 'next/image';

const imgSrc = `/images/img1.png`;

export default function Home() {
  console.log('process.env.BASE_PATH', process.env.BASE_PATH);
  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>Hello, World!</h1>

      <Image src={`${imgSrc}`} alt='img' width='64' height='64' />
    </main>
  );
}
