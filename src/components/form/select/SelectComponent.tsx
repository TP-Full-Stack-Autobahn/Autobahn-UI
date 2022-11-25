import React from 'react';

export type SelectProps = {
  showLabel?: boolean;
  label: string; 
  name: string; 
  options: Array<string>;
  style?: Object
}

/**
 * Primary UI component for user interaction
 */
export const SelectComponent: React.FC<SelectProps> = (props) => {
  const {showLabel = true, label, name, options, style} = props;

  const classNames = `atbh-select`;
    
  const selectOptions = Object.entries(options).map(([key, value]) => {
    return <option value={key}>{value}</option>
  });
  
  return (
    <div className="atbh-select-container">
      <div className={classNames}>
        {showLabel && 
          <label htmlFor={name}>{label}</label>
        }
        <select id={name} name={name} style={style} {...props}>
          {selectOptions}
        </select>
      </div>
      <span className="atbh-select-arrow">▼</span>
    </div>
  );
};