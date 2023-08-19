import { cn } from '@/lib/utils';
import type { FC } from 'react';

type Props = {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button: FC<Props> = ({ type, children, className, ...rest }) => {
  return (
    <button
      className={cn('flex gap-2 items-center justify-center', className)}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
