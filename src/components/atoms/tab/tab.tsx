import React, { FC } from 'react';
import { SbBlokData, storyblokEditable } from '@storyblok/react';

interface Props {
  blok: any;
  clickHandler: (val: string) => void;
  isSelected: string;
}
const Tab: FC<Props> = ({ blok, clickHandler, isSelected }) => {
  console.log('tabl', blok);
  return (
    <button
      onClick={() => clickHandler(blok.label)}
      className={`${isSelected === blok.label ? '-is-selected' : ''}`}
      type='button'
      {...storyblokEditable(blok)}
    >
      {blok.label}
    </button>
  );
};

export default Tab;
