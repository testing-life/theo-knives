import React, { FC } from 'react';
import { storyblokEditable } from '@storyblok/react';
import './tab.css';

interface Props {
  blok: any;
  clickHandler: (val: string) => void;
  isSelected: string;
}

const Tab: FC<Props> = ({ blok, clickHandler, isSelected }) => {
  const onClick = () => clickHandler(blok.label);
  return (
    <button
      onClick={onClick}
      className={`theo-tab ${
        isSelected === blok.label.toLowerCase() ? '-is-selected' : ''
      }`}
      type='button'
      {...storyblokEditable(blok)}
    >
      {blok.label}
    </button>
  );
};

export default Tab;
