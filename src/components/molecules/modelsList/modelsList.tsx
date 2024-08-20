import React, { FC } from 'react';
import { storyblokEditable } from '@storyblok/react';
import Model from '../model/model';
import './modelsList.css';

interface Props {
  blok: any;
}

const ModelsList: FC<Props> = ({ blok }) => {
  return (
    <ul {...storyblokEditable(blok)} className='theo-models'>
      {blok.models.map((model: any) => (
        <li key={blok.uid} className=''>
          <Model blok={model} />
        </li>
      ))}
    </ul>
  );
};

export default ModelsList;
