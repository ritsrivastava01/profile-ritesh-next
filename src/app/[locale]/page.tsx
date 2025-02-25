import { PageLayout } from '@/components/PageLayout';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <PageLayout title={t('title')}>
      <div>
        <h1>{t('title')}</h1>
        <Link href="/about">{t('about')}</Link>
      </div>
    </PageLayout>
  );
}
