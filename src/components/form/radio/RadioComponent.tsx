import React from 'react';

export type RadioProps = {
  label: string
  value: string
  name: string
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const RadioComponent: React.FC<RadioProps> = (props) => {
  const {value, label, className, name} = props;

  return (
    <div className={`atbh-radio ${className && `${className}`}`}>
      <input type="radio" id={value} value={value} name={name} {...props}/>
      <label htmlFor={value}>{label}</label>
    </div>
  );
};