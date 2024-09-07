import React from 'react';
import './select.css';

interface Props<T, K> {
  options: T;
  value?: K;
  label: string;
  id: string;
  changeHandler: (e: K) => void;
}

const Select = <T extends Record<string, any>, K extends keyof T>({
  options,
  value,
  id,
  label,
  changeHandler,
}: Props<T, K>) => {
  return (
    <>
      <label className='theo-select__label -a11y-hide' htmlFor={id}>
        {label}
      </label>
      <select
        className='theo-select__select'
        value={value as string}
        id={id}
        onChange={(e) => changeHandler(e.target.value as K)}
      >
        {Object.entries(options).map(([code, label], index) => (
          <option key={`${index}${code}`} value={code}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
