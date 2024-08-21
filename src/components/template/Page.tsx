import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import './Page.css';

const Page = ({ blok }: any) => (
  <main className='theo-page' {...storyblokEditable(blok)}>
    {blok.body
      ? blok.body.map((blok: any) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </main>
);

export default Page;
