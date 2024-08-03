import { storyblokEditable } from '@storyblok/react';

const Heading = ({ blok }: any) => {
  return (
    <h2
      className='py-32 text-6xl text-[#50b0ae] font-bold text-center'
      {...storyblokEditable(blok)}
    >
      {blok.headline}
    </h2>
  );
};

export default Heading;
