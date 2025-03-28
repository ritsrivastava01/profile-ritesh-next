import BaseLayout from '@/components/BaseLayout';
import NotFoundPage from '@/components/NotFound';

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default function GlobalNotFound() {
  return (
    <BaseLayout >
      <NotFoundPage />
    </BaseLayout>
  );
}
