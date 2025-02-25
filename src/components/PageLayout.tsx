import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: ReactNode;
};

export const PageLayout = ({ children }: Readonly<Props>) => {
  return (
    <div className="container relative mx-auto h-full max-w-7xl px-6 pt-4 md:px-8">
      {children}
    </div>
  );
};
