import React, { FC, useRef, useState } from 'react';
import './productGallery.css';
import IconButton from 'components/atoms/iconButton/iconButton';
import { ReactComponent as Prev } from 'assets/icons/Chevron left.svg';
import { ReactComponent as Next } from 'assets/icons/Chevron right.svg';
import useBreakpoints from 'hooks/useBreakpoints';
import { MultiassetStoryblok } from 'types/component-types-sb';
import Dialog from 'components/atoms/dialog/dialog';
import { ReactComponent as FullScreenIcon } from 'assets/icons/FullScreen.svg';

interface Props {
  images: MultiassetStoryblok;
}

const ProductGallery: FC<Props> = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [forTablet, forDesktop] = useBreakpoints();
  const [fullscreenSrc, setFullscreenSrc] = useState('');
  const sliderRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const isPrevDisabled: boolean = slideIndex === 0;

  const isNextDisabled: boolean =
    sliderRef.current && slideIndex === sliderRef.current!.children.length - 1
      ? true
      : false;

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
    if (slideIndex > 0) {
      SlideTo(slideIndex - 1);
    }
  };

  const slideNext = () => {
    if (
      sliderRef.current &&
      slideIndex < sliderRef.current.children.length - 1
    ) {
      SlideTo(slideIndex + 1);
    }
  };

  const openDialog = (url: string) => {
    setFullscreenSrc(url);
    setIsOpen(true);
  };

  return (
    <>
      <div className='theo-product-gallery'>
        <ul className='theo-product-gallery__list' ref={sliderRef}>
          {images?.map?.((image) => (
            <li className='theo-product-gallery__item' key={image.id}>
              <IconButton clickHandler={() => openDialog(image.filename)}>
                <FullScreenIcon />
              </IconButton>
              <img
                src={image.filename}
                className='theo-product-gallery__image'
                alt=''
              />
            </li>
          ))}
        </ul>
        {!forTablet && !forDesktop ? (
          <div className='theo-product-gallery__controls'>
            <IconButton disabled={isPrevDisabled} clickHandler={slidePrev}>
              <Prev />
            </IconButton>
            <span className='theo-product-gallery__counter'>{`${
              slideIndex + 1
            } / ${images.length}`}</span>
            <IconButton disabled={isNextDisabled} clickHandler={slideNext}>
              <Next />
            </IconButton>
          </div>
        ) : null}
      </div>
      <Dialog
        isOpen={isOpen}
        srcUrl={fullscreenSrc}
        onCloseHandler={() => {
          setIsOpen(false);
          setFullscreenSrc('');
        }}
      />
    </>
  );
};

export default ProductGallery;
