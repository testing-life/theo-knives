import React, { FC } from 'react';
import { storyblokEditable } from '@storyblok/react';
import './model.css';

interface Props {
  blok: any;
}

const Model: FC<Props> = ({ blok }) => {
  const modelType = blok.name?.toLowerCase().split(' ').join('') || 'all';
  return (
    <article {...storyblokEditable(blok)} className='theo-model'>
      <figure className='theo-model__figure'>
        <img className='pure-img' src={blok.image.filename} alt='' />
      </figure>
      <h2 className='theo-model__heading'>{blok.name}</h2>
      <p className='theo-model__description'>{blok.description}</p>
      <a
        className='pure-button theo-button theo-model__cta'
        href={`${blok.cta.cached_url}?model=${modelType}`}
      >
        {blok.linkLabel}
      </a>
    </article>
  );
};

export default Model;
