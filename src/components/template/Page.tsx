import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import './Page.css';
import Footer from 'components/molecules/footer/footer';
import { PageStoryblok } from 'types/component-types-sb';

const Page = ({ blok }: PageStoryblok) => {
  return (
    <>
      <main className='theo-page' {...storyblokEditable(blok)}>
        {blok.body
          ? blok.body.map((blok: any) => (
              <StoryblokComponent blok={blok} key={blok._uid} />
            ))
          : null}
      </main>
      <Footer />
    </>
  );
};

export default Page;
