import { useStoryblok, StoryblokComponent } from '@storyblok/react';
import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import PortfolioPage from 'pages/portfolioPage/portfolioPage';

function StoryblokPage() {
  let { slug } = useParams<{ slug: string }>();
  slug = slug || 'home';
  const story = useStoryblok(slug, { version: 'draft', language: 'de' });
  if (!story || !story.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content}></StoryblokComponent>;
}

function App() {
  return (
    <div data-theme='default' className='theo-root'>
      <Routes>
        <Route path='/' element={<StoryblokPage />} />
        <Route path='/:slug' element={<StoryblokPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
      </Routes>
    </div>
  );
}

export default App;
