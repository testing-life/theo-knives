import React, { FC } from 'react';
import { storyblokEditable } from '@storyblok/react';
import { ParagraphStoryblok } from 'types/component-types-sb';

interface Props {
  blok: ParagraphStoryblok;
}

const RtfText: FC<Props> = ({ blok }) => {
  return (
    <p className='theo-rtf-text' {...storyblokEditable(blok)}>
      {blok.richText}
    </p>
  );
};

export default RtfText;
