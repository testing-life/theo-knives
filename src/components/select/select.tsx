import React from 'react';

interface Props<T, K> {
  options: T;
  value: K;
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
      <label htmlFor={id}>{label}</label>
      <select
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
