import { classMerge } from '@/utilities/classMerge';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });
const roboto = Raleway({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ritz | Front End',
  description: 'Ritesh-Front End Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classMerge(
          roboto.className,
          'flex h-full flex-col bg-slate-900 text-slate-400 antialiased',
        )}
      >
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
