import Image from 'next/image';
import { ReactNode } from 'react';

interface AuthButtonProps {
  onClick: Function;
  className: string;
  children: ReactNode;
}

export const AuthButton = ({ onClick, className, children }: AuthButtonProps) => {
  return (
    <button onClick={() => onClick()} className={className}>
      {children}
    </button>
  );
};
