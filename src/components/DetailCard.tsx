import { ReactNode } from 'react';
import classNames from 'classnames';

interface DetailCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export const DetailCard = ({
  children,
  className,
  innerClassName,
}: DetailCardProps) => {
  const cardClass = classNames(
    'detail-card mx-auto mt-0 mb-3 items-center rounded-[10px] overflow-hidden shadow-[1px 1px 2px rgb(0,0,0, 0.2)] sm:my-3 sm:mx-auto',
    className
  );

  const cardInnerClass = classNames(
    'detail-card__inner detail-card--mask backdrop-blur-sm bg-[#56585e73] w-full h-min-[55px] mx-auto py-5 px-1 sm:p-6 md:p-6 h-min-[70px]',
    innerClassName
  );

  return (
    <div className={cardClass}>
      <div className={cardInnerClass}>{children}</div>
    </div>
  );
};
