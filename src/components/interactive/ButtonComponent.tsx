import React from 'react';

export type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  shape?: "rounded"
  className?: string
  loading?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
}

/**
 * Primary UI component for user interaction
 */
export const ButtonComponent: React.FC<ButtonProps> = (props) => {
  const {children, variant = "primary", shape = "", className, loading = false, onClick} = props;

  return (
    <button className={`atbh-btn ${variant && `atbh-btn-${variant}` } ${shape && `atbh-btn-${shape}`} ${className && `${className}`} ${loading && 'loading'}`} disabled={loading} onClick={onClick}>
      { loading ?
        <span className="spinner"></span> : children
      }
    </button>
  );
};