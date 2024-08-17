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
    <article {...storyblokEditable(blok)} className='theo-product'>
      <ProductGallery images={blok.images} />
      <div className='theo-product__content'>
        <header className='theo-product__header'>
          <h2 className='theo-product__name'>{blok.name}</h2>
          <span className='theo-product__model'>{blok.model}</span>
        </header>
        <p className='theo-product__description'>{blok.description}</p>
        <a className='pure-button theo-button'>
          {blok.available ? blok.availableLabel : blok.unavailableLabel}
        </a>
      </div>
    </article>
  );
};

export default Product;
