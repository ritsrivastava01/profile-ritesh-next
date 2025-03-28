import { classMerge } from '@/classMerge';
import { Roboto } from 'next/font/google';
import { ReactNode } from 'react';
import Footer from './Footer';
import { Header } from './Header';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });
type Props = {
  children: ReactNode;
 
};

export default async function BaseLayout({ children }: Readonly<Props>) {


  return (
    <html className="h-full" lang="en">
      <body
        className={classMerge(roboto.className, 'flex h-full flex-col antialiased')}
      >
       
          <Header />

          {children}
          <Footer />
      </body>
    </html>
  );
}
