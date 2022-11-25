import React from 'react';

export type InputProps = {
  label: string
  value: string
  name: string
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const RadioComponent: React.FC<InputProps> = (props) => {
  const {value, label, className, name} = props;

  return (
    <div className={`atbh-radio ${className}`}>
      <input type="radio" id={name} value={value} {...props}/>
      <label htmlFor={name}>{label}</label>
    </div>
  );
};