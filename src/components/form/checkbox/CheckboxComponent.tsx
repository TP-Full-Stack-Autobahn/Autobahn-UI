import React from 'react';

export type CheckboxProps = {
  label: string
  name: string
  value?: string
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const CheckboxComponent: React.FC<CheckboxProps> = (props) => {
  const {label, name, value, className} = props;

  return (
    <div className={`atbh-checkbox ${className && `${className}`}`}>
      <input type="checkbox" id={value} value={value} name={name}/>
      <label htmlFor={value}>{label}</label>
    </div>
  );
};