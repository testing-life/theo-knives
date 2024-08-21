import React, { FC } from 'react';
import { storyblokEditable } from '@storyblok/react';
import './link.css';

interface Props {
  blok: any;
}

const Link: FC<Props> = ({ blok }) => {
  return (
    <a
      className='theo-link'
      rel='noopener'
      {...storyblokEditable(blok)}
      href={blok.whereTo.cached_url}
    >
      {blok.label}
    </a>
  );
};

export default Link;
