import { useStoryblok, StoryblokComponent } from '@storyblok/react';
import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import PortfolioPage from 'pages/portfolioPage/portfolioPage';
import { LanguageProvider, useLanguage } from 'context/languageContext';

const StoryblokPage = () => {
  let { slug } = useParams<{ slug: string }>();
  slug = slug || 'home';
  const { language } = useLanguage();
  const story = useStoryblok(slug, {
    version: 'draft',
    language: language as string,
  });

  console.log('out lang', language);

  if (!story || !story.content) {
    return <div>Loading...</div>;
  }

  return <StoryblokComponent blok={story.content}></StoryblokComponent>;
};

function App() {
  return (
    <div data-theme='default' className='theo-root'>
      <LanguageProvider>
        <Routes>
          <Route path='/' element={<StoryblokPage />} />
          <Route path='/:slug' element={<StoryblokPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
        </Routes>
      </LanguageProvider>
    </div>
  );
}

export default App;
