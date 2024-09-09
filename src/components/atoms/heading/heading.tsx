import React, { FC } from 'react';
import { storyblokEditable } from '@storyblok/react';
import { HeadingStoryblok } from 'types/component-types-sb';

interface Props {
  blok: HeadingStoryblok;
}

enum Element {
  H1 = 'h1',
  H2 = 'h2',
}

const Heading: FC<Props> = ({ blok }) => {
  return blok.renderAs === Element.H1 ? (
    <h1 {...storyblokEditable(blok)} className='theo-heading'>
      {blok.headline}
    </h1>
  ) : (
    <h2 {...storyblokEditable(blok)} className='theo-heading'>
      {blok.headline}
    </h2>
  );
};

export default Heading;
