import Tab from 'components/atoms/tab/tab';
import React, { FC, useState } from 'react';
import { storyblokEditable } from '@storyblok/react';
import './tabs.css';
import { TabsStoryblok, TabStoryblok } from 'types/component-types-sb';

interface Props {
  blok: TabsStoryblok;
  onSelect: (val: string) => void;
  paramFilter: string;
}

const Tabs: FC<Props> = ({ blok, onSelect, paramFilter }) => {
  const [selection, setSelection] = useState('');

  const selectionHandler = (value: string) => {
    if (!value) {
      return;
    }
    setSelection(value);
    onSelect(value);
  };

  return (
    <ul className='theo-tabs' {...storyblokEditable(blok)}>
      {(blok.tabs as TabStoryblok[])?.map((tab: TabStoryblok) => (
        <li key={tab._uid} className=''>
          <Tab
            blok={tab}
            isSelected={paramFilter || selection}
            clickHandler={selectionHandler}
          />
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
