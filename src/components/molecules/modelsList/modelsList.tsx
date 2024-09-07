import React, { FC } from 'react';
import { storyblokEditable } from '@storyblok/react';
import Model from '../model/model';
import './modelsList.css';
import { ModelsStoryblok } from 'types/component-types-sb';

interface Props {
  blok: ModelsStoryblok;
}

const ModelsList: FC<Props> = ({ blok }) => {
  return (
    <ul {...storyblokEditable(blok)} className='theo-models'>
      {blok.models?.map((model: any, index: number) => (
        <li key={`${blok.name}${index}`} className=''>
          <Model blok={model} />
        </li>
      ))}
    </ul>
  );
};

export default ModelsList;
