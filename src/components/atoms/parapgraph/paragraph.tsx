import React, { FC } from 'react';
import { storyblokEditable } from '@storyblok/react';

interface Props {
  blok: any;
}

const Paragraph: FC<Props> = ({ blok }) => {
  return (
    <p className='theo-paragraph' {...storyblokEditable(blok)}>
      {blok.text}
    </p>
  );
};

export default Paragraph;