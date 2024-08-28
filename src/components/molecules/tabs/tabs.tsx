import Tab from 'components/atoms/tab/tab';
import React, { FC, useEffect, useState } from 'react';
import {
  storyblokEditable,
  useStoryblok,
  getStoryblokApi,
} from '@storyblok/react';

interface Props {
  blok: any;
}

const Tabs: FC<Props> = ({ blok }) => {
  const [selection, setSelection] = useState('all');
  const story = useStoryblok('portfolio', {
    version: 'published',
  });

  useEffect(() => {
    if (story) {
      const portfolioContent = story.content.body;
      const tabs = portfolioContent.filter(
        (blok: any) => blok.component === 'tab'
      );
      console.log('products', portfolioContent, tabs);
    }
  }, [story]);

  const selectionHandler = (value: string) => {
    if (!value) {
      return;
    }
    setSelection(value);
  };

  return (
    <ul {...storyblokEditable(blok)}>
      <>{console.log('first')}</>
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
// filter_query: {
//   component: {
//     in: 'news,author',
//   },
// },
