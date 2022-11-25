import React from 'react';

export type InputProps = {
  showLabel?: boolean;
  label: string; 
  name: string; 
  options: Object;  
  style?: Object
}

/**
 * Primary UI component for user interaction
 */
export const RadioComponent: React.FC<InputProps> = (props) => {
  const {showLabel = true, label, options, name, style} = props;

  const classNames = `input-autobahn`;

  return (
    <div className={classNames}>
      {showLabel && 
        <label htmlFor={name}>{label}</label>
      }
      {/* <input id={name} type={type} name={name} placeholder={placeholder} style={style} {...props}/> */}
    </div>
  );
};