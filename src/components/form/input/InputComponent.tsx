import React from 'react';

export type InputProps = {
  showLabel?: boolean
  label?: string
  type: "text" | "email" | "number"
  placeholder?: string
  name: string
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const InputComponent: React.FC<InputProps> = (props) => {
  const {showLabel = true, label, type, placeholder, className, name} = props;

  return (
    <div className={`atbh-input ${className && `${className}`}`}>
      {showLabel && label &&
        <label htmlFor={name}>{label}</label>
      }
      <input id={name} type={type} name={name} placeholder={placeholder}  {...props}/>
    </div>
  );
};