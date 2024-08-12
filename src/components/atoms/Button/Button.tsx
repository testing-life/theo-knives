import { storyblokEditable } from '@storyblok/react';

const Button = ({ blok }: any) => {
  return (
    <button
      className={`py-32 text-6xl text-[#50b0ae] font-bold text-center ${
        blok.fullWidth ? '-is-full-width' : ''
      }`}
      {...storyblokEditable(blok)}
    >
      {blok.label}
    </button>
  );
};

export default Button;
