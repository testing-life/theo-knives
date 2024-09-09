import React, { FC } from 'react';
import { storyblokEditable } from '@storyblok/react';
import './link.css';
import { LinkStoryblok } from 'types/component-types-sb';

interface Props {
  blok: LinkStoryblok;
}

const Link: FC<Props> = ({ blok }) => {
  return (
    <a
      className={`${blok.asButton ? 'pure-button theo-button' : 'theo-link'}`}
      rel='noopener'
      {...storyblokEditable(blok)}
      href={blok.whereTo.cached_url}
    >
      {blok.label}
    </a>
  );
};

export default Link;
