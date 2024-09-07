import React, { FC } from 'react';
import { storyblokEditable } from '@storyblok/react';
import './tab.css';
import { toNoSpaceLowercase } from 'utils/string';
import { TabStoryblok } from 'types/component-types-sb';

interface Props {
  blok: TabStoryblok;
  clickHandler: (val: string) => void;
  isSelected: string;
}

const Tab: FC<Props> = ({ blok, clickHandler, isSelected }) => {
  const value = toNoSpaceLowercase(blok.label as string) || '';
  const onClick = () => clickHandler(value);
  return (
    <button
      onClick={onClick}
      className={`theo-tab ${isSelected === value ? '-is-selected' : ''}`}
      type='button'
      {...storyblokEditable(blok)}
    >
      {blok.label}
    </button>
  );
};

export default Tab;
