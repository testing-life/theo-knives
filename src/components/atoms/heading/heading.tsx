import React, { FC } from 'react';
import { SbBlokData, storyblokEditable } from '@storyblok/react';

interface Props {
  blok: any;
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
