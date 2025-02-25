import { classMerge } from '@/classMerge';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Roboto } from 'next/font/google';
import { ReactNode } from 'react';
import Footer from './Footer';
import { Header } from './Header';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });
type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({ children, locale }: Readonly<Props>) {
  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale}>
      <body
        className={classMerge(roboto.className, 'flex h-full flex-col antialiased')}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />

          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
