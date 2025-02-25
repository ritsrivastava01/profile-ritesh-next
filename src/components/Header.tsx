import { routing } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Fragment } from 'react';
import { LocaleSwitcher } from './LocaleSwitcher';

export const Header = () => {
  const t = useTranslations('LocaleSwitcher');
  const currentLocale = useLocale();

  return (
    <div className="flex h-[60px] items-center justify-between bg-gradient-to-l from-slate-500 to-slate-800 px-5 py-2 font-bold text-zinc-200 shadow-md">
      <div>
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </div>
      <div className="flex">
        {routing.locales.map((lng) => (
          <Fragment key={lng}>
            <LocaleSwitcher
              locale={lng}
              label={t('locale', { locale: lng })}
              isSelected={currentLocale === lng}
            />
            <span className="mx-2 last:hidden">|</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
