import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import './Page.css';
import Footer from 'components/molecules/footer/footer';

const Page = ({ blok }: any) => (
  <main className='theo-page' {...storyblokEditable(blok)}>
    {blok.body
      ? blok.body.map((blok: any) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))
      : null}
    <Footer />
  </main>
);

export default Page;
