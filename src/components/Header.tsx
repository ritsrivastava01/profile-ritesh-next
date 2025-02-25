// components/Header.tsx
'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocaleSwitcher from './LocaleSwitcher';

export default function Header() {
  const t = useTranslations('Header');
  return (
    <header className="flex bg-gray-200 shadow">
      <nav className="container flex gap-5 px-2 py-2">
        <Link href="/">{t('home')}</Link>
        <Link href="/about">{t('about')}</Link>
      </nav>
      <LocaleSwitcher />
    </header>
  );
}
