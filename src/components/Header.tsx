import Image from 'next/image';
import { Fragment } from 'react';

export const Header = () => {
  return (
    <div className='flex h-[60px] items-center justify-between bg-gradient-to-l from-slate-500 to-slate-800 px-5 py-2 font-bold text-zinc-200 shadow-md'>
      <div>
        <Image src='/logo.png' alt='Logo' width={40} height={40} />
      </div>
      <div className='flex'>
        <div className='mr-4'>Home</div>
        <div className='mr-4'>About</div>
        <div className='mr-4'>Contact</div>
      </div>
    </div>
  );
};
