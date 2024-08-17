import React, { FC, useState } from 'react';
import './productGallery.css';

interface Props {
  images: { [key: string]: string }[];
}

const ProductGallery: FC<Props> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ariaId = 'mainNav';
  console.log(images);
  return (
    <div className='theo-product-gallery'>
      <ul className='theo-product-gallery__list'>
        {images?.map?.((image) => (
          <li className='theo-product-gallery__item'>
            <img
              src={image.filename}
              className='theo-product-gallery__image'
              alt=''
            />
          </li>
        ))}
      </ul>
      ;
    </div>
  );
};

export default ProductGallery;
