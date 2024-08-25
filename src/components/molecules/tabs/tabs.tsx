import Tab from 'components/atoms/tab/tab';
import React, { FC, useState } from 'react';
import { storyblokEditable } from '@storyblok/react';

interface Props {
  blok: any;
}

const Tabs: FC<Props> = ({ blok }) => {
  const [selection, setSelection] = useState('all');

  const selectionHandler = (value: string) => {
    if (!value) {
      return;
    }
    setSelection(value);
  };

  return (
    <ul {...storyblokEditable(blok)}>
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
