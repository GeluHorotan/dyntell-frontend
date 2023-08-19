import { cn } from '@/lib/utils';
import type { FC } from 'react';

type Props = {
  type: string;
  name: string;
  label: string;
  className?: string;
  error?: string;
  placeholder?: string;
  row?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({
  type,
  name,
  label,
  className,
  row,
  error,
  ...rest
}) => {
  return (
    <>
      <p className="text-red-600">{error && error}</p>
      <div
        className={`flex ${
          row ? 'flex-row items-center' : 'flex-col items-start'
        } gap-2 `}
      >
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          className={cn(
            'bg-yellow-400   rounded-lg text-black focus:ring-transparent placeholder:text-sm ',
            className
          )}
          {...rest}
        />
      </div>
    </>
  );
};

export default Input;
