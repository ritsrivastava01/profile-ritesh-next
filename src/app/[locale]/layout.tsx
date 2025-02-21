import BaseLayout from '@/components/BaseLayout';
import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title'),
  };
}

export type LocalLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};
export default async function LocaleLayout({
  children,
  params,
}: Readonly<LocalLayoutProps>) {
  const locale = (await params).locale;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
