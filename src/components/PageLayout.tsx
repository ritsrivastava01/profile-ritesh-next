import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: ReactNode;
};

export const PageLayout = ({ children }: Readonly<Props>) => {
  return (
    <div className="transparent 80%); relative container mx-auto h-full max-w-7xl px-6 pt-4 md:px-8">
      {children}
    </div>
  );
};
//radial-gradient(600px at 1537px 115px, rgba(29, 78, 216, 0.15), transparent 80%)
