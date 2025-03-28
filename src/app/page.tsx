import Hero from '@/components/Hero';
import { PageLayout } from '@/components/PageLayout';
import Test from '@/components/test';
import { getStaticPathWithBasePath } from '@/lib/getPath';
import Image from 'next/image';

const imgSrc = getStaticPathWithBasePath('/images/img1.png');

export default function Home() {
  return (
    <PageLayout>
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 [background:radial-gradient(600px_at_493px_530px,rgba(29,78,216,0.15),transparent_80%)] lg:absolute"></div>
      <h1 className="text-4xl font-bold">Hello, World!</h1>
      <Test />

      <Image src={`${imgSrc}`} alt="img" width="64" height="64" />
      <Hero />
    </PageLayout>
  );
}
