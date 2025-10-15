import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'btn',
        variant === 'primary' ? 'btn-primary' : 'btn-ghost',
        className,
      )}
    />
  );
}
