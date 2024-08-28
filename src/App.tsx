import { useStoryblok, StoryblokComponent } from '@storyblok/react';
import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import PortfolioPage from 'pages/portfolioPage/portfolioPage';

function StoryblokPage() {
  let { slug } = useParams<{ slug: string }>();
  slug = slug || 'home';
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

function App() {
  return (
    <Routes>
      <Route path='/' element={<StoryblokPage />} />
      <Route path='/:slug' element={<PortfolioPage />} />
    </Routes>
  );
}

export default App;
