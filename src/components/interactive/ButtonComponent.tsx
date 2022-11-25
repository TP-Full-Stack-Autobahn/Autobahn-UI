import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "danger"; 
  shape?: "rounded";
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ButtonComponent: React.FC<ButtonProps> = (props) => {
  const {children, variant, shape, onClick} = props;
  const classNames = `btn btn-${variant} btn-${shape}`;

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};