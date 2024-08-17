import React, { FC, useRef, useState } from 'react';
import './productGallery.css';
import IconButton from 'components/atoms/iconButton/iconButton';
import { ReactComponent as Prev } from 'assets/icons/Chevron left.svg';
import { ReactComponent as Next } from 'assets/icons/Chevron right.svg';
import { forTablet } from 'utils/breakpoints';

interface Props {
  images: { [key: string]: string }[];
}

const ProductGallery: FC<Props> = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef<HTMLUListElement>(null);

  const SlideTo = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
    setSlideIndex(index);
  };

  const slidePrev = () => {
    SlideTo(slideIndex - 1);
  };
  const slideNext = () => {
    SlideTo(slideIndex + 1);
  };

  return (
    <div className='theo-product-gallery'>
      <ul className='theo-product-gallery__list' ref={sliderRef}>
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
      {!forTablet ? (
        <div className='theo-product-gallery__controls'>
          <IconButton clickHandler={slidePrev}>
            <Prev />
          </IconButton>
          <span>{`${slideIndex + 1} / ${
            sliderRef.current?.children.length
          }`}</span>
          <IconButton clickHandler={slideNext}>
            <Next />
          </IconButton>
        </div>
      ) : null}
    </div>
  );
};

export default ProductGallery;
