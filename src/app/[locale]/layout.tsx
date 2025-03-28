import BaseLayout from '@/components/BaseLayout';
import { ReactNode } from 'react';



export type LocalLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};
export default async function LocaleLayout({
  children,

}: Readonly<LocalLayoutProps>) {
 

  
  return <BaseLayout >{children}</BaseLayout>;
}
