import type { FC } from 'react';

type Props = {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: FC<Props> = ({ type, children, ...rest }) => {
  return (
    <button
      className="flex gap-2 items-center justify-center"
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
