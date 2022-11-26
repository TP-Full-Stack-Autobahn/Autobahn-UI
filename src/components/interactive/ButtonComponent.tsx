import React from 'react';

export type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  shape?: "rounded",
  className?: string
  onClick?: React.MouseEventHandler<HTMLElement>
}

/**
 * Primary UI component for user interaction
 */
export const ButtonComponent: React.FC<ButtonProps> = (props) => {
  const {children, variant = "primary", shape = "", className = "", onClick} = props;

  return (
    <button className={`atbh-btn ${variant && `atbh-btn-${variant}` } ${shape && `atbh-btn-${shape}`} ${className && `${className}`}`} onClick={onClick}>
      {children}
    </button>
  );
};