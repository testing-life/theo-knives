import React, { FC } from 'react';
import { ParagraphStoryblok } from 'types/component-types-sb';
import { storyblokEditable, StoryblokRichText } from '@storyblok/react';

interface Props {
  blok: ParagraphStoryblok;
}

const RtfText: FC<Props> = ({ blok }) => {
  return (
    <div className='theo-rtf-text' {...storyblokEditable(blok)}>
      <StoryblokRichText doc={blok.tnc.content} />
    </div>
  );
};

export default RtfText;
