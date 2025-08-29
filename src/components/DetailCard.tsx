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
    'detail-card mx-auto mt-0 mb-3 sm:my-3 py-4 px-2 sm:p-6 md:6 items-center rounded-[10px] overflow-hidden bg-[#56585e73] backdrop-blur-sm shadow-[1px 1px 2px rgb(0,0,0, 0.2)] ',
    className
  );
  const cardInnerClass = classNames('detail-card__inner', innerClassName);
  return (
    <div className={cardClass}>
      <div className={cardInnerClass}>{children}</div>
    </div>
  );
};
