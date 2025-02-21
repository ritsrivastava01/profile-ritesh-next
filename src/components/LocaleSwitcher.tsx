'use client';

import { classMerge } from '@/classMerge';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';

type Props = {
  label: string;
  locale: Locale;
  isSelected: boolean;
};

export const LocaleSwitcher = ({ label, locale, isSelected }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = () => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript is wrong about the params type
        { pathname, params },
        { locale: locale },
      );
    });
  };
  return (
    <label
      className={classMerge(
        'relative text-gray-400',
        isPending && 'transition-opacity [&:disabled]:opacity-30',
      )}
    >
      <button
        disabled={isPending}
        onClick={onSelectChange}
        className={`${isSelected ? 'border-b-2 text-zinc-200' : 'text-zinc-400'}`}
      >
        {label}
      </button>
    </label>
  );
};
