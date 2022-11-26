import React from 'react';

export type SelectProps = {
  showLabel?: boolean
  label?: string
  name: string
  options: Object,
  defaultOption?: string
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const SelectComponent: React.FC<SelectProps> = (props) => {
  const {showLabel = true, label = "", name, options, className, defaultOption} = props;
    
  const selectOptions = Object.entries(options).map(([key, value], index) => {
    return <option key={index} value={key}>{value}</option>
  });
  
  return (
    <div className={`atbh-select ${className && `${className}`}`}>
      <div className="atbh-select-container ">
        {showLabel && label &&
          <label htmlFor={name}>{label}</label>
        }
        <select id={name} name={name}>
          {defaultOption && 
            <option value="" selected disabled hidden>{defaultOption}</option>
          }
          {selectOptions}
        </select>
      </div>
      <span className="atbh-select-arrow">▼</span>
    </div>
  );
};