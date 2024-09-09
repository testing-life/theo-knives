import React, { FC } from 'react';
import { storyblokEditable } from '@storyblok/react';
import './button.css';
import { ButtonStoryblok } from 'types/component-types-sb';

interface Props {
  blok: ButtonStoryblok;
}

const Button: FC<Props> = ({ blok }) => {
  return (
    <button {...storyblokEditable(blok)} className='pure-button theo-button'>
      {blok.label}
    </button>
  );
};

export default Button;
