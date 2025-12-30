import React from 'react';
import clsx from 'clsx';
import { type ButtonProps } from '../lib/types/button';
import { buttonVariants, buttonSizes, buttonShapes, baseClasses } from '../lib/constants/button';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  shape = 'rounded',
  size = 'md',
  className,
  children,
  ...props
}) => {

  return (
    <button
      className={clsx(
        baseClasses,
        buttonVariants[variant],
        buttonSizes[size],
        buttonShapes[shape],
        className
      )}
      {...props}
    >
      {children || 'Button'}
    </button>
  );
};
