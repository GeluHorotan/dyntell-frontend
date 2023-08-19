import { cn } from '@/lib/cn';
import type { FC } from 'react';

type Props = {
  type: string;
  name: string;
  label: string;
  className?: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({ type, name, label, className, ...rest }) => {
  return (
    <div className="flex flex-col items-start">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={cn(
          'bg-yellow-400 border-none rounded-lg placeholder:text-base',
          className
        )}
        {...rest}
      />
    </div>
  );
};

export default Input;
