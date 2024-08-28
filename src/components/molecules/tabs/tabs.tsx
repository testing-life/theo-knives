import Tab from 'components/atoms/tab/tab';
import React, { FC, useState } from 'react';
import { storyblokEditable } from '@storyblok/react';
import './tabs.css';

interface Props {
  blok: any;
  onSelect: (val: string) => void;
}

const Tabs: FC<Props> = ({ blok, onSelect }) => {
  const [selection, setSelection] = useState('all');
  const selectionHandler = (value: string) => {
    if (!value) {
      return;
    }
    setSelection(value);
    onSelect(value);
  };

  return (
    <ul className='theo-tabs' {...storyblokEditable(blok)}>
      {blok.tabs?.map((tab: any) => (
        <li key={tab._uid} className=''>
          <Tab
            blok={tab}
            isSelected={selection}
            clickHandler={selectionHandler}
          />
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
