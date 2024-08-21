import { useStoryblok, StoryblokComponent } from '@storyblok/react';
import './App.css';

function App() {
  let slug =
    window.location.pathname === '/'
      ? 'home'
      : window.location.pathname.replace('/', '');

  const story = useStoryblok(slug, { version: 'draft' });
  if (!story || !story.content) {
    return <div>Loading...</div>;
  }

  return (
    <div data-theme='default' className='theo-root'>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export default App;
