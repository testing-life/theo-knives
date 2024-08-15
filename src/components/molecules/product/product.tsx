import React, { FC } from 'react';
import { storyblokEditable } from '@storyblok/react';
import ProductGallery from '../productGallery/productGallery';
import './product.css';

interface Props {
  blok: any;
}

const Product: FC<Props> = ({ blok }) => {
  console.log('blok', blok);
  return (
    <article {...storyblokEditable(blok)} className='product'>
      <ProductGallery images={blok.images[0]} />
      <header className='product__header'>
        <h2 className='product__name'>{blok.name}</h2>
        <span className='product__model'>{blok.model}</span>
      </header>
      <p className='product__description'>{blok.description}</p>
      <a className='pure-button theo-button'>
        {blok.available ? blok.availableLabel : blok.unavailableLabel}
      </a>
    </article>
  );
};

export default Product;

// name:string
// model:string
// description:string
// images: string[]
// available: bool
