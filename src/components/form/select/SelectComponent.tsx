import React from 'react';

export type SelectProps = {
  showLabel?: boolean
  label?: string
  name: string
  options: Object,
  optionSelected: string
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const SelectComponent: React.FC<SelectProps> = (props) => {
  const {showLabel = true, label = "", name, options, className, optionSelected} = props;
    
  const selectOptions = Object.entries(options).map(([key, value]) => {
    return <option value={key}>{value}</option>
  });
  
  return (
    <div className="atbh-select-container">
      <div className={`atbh-select ${className && `${className}`}`}>
        {showLabel && label &&
          <label htmlFor={name}>{label}</label>
        }
        <select id={name} name={name} {...props}>
          {optionSelected && 
            <option value="" selected disabled hidden>{optionSelected}</option>
          }
          {selectOptions}
        </select>
      </div>
      <span className="atbh-select-arrow">▼</span>
    </div>
  );
};