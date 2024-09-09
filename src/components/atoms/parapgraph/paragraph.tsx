import React, { FC } from 'react';
import { storyblokEditable } from '@storyblok/react';
import { ParagraphStoryblok } from 'types/component-types-sb';

interface Props {
  blok: ParagraphStoryblok;
}

const Paragraph: FC<Props> = ({ blok }) => {
  return (
    <p className='theo-paragraph' {...storyblokEditable(blok)}>
      {blok.text}
    </p>
  );
};

export default Paragraph;
