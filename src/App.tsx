import { useStoryblok, StoryblokComponent } from '@storyblok/react';
import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import PortfolioPage from 'pages/portfolioPage/portfolioPage';
import { LanguageProvider, useLanguage } from 'context/languageContext';

const StoryblokPage = () => {
  let { slug } = useParams<{ slug: string }>();
  slug = slug || 'home';
  console.log('slug', slug);
  const { language } = useLanguage();
  console.log('language in storyblok page', language);
  const story = useStoryblok(slug, {
    version: 'draft',
    language: language as string,
    fallback_lang: 'de',
  });

  if (!story || !story.content) {
    return <div>Loading...</div>;
  }
  console.log('story', story);
  return <StoryblokComponent blok={story.content}></StoryblokComponent>;
};

function App() {
  return (
    <div data-theme='default' className='theo-root'>
      <LanguageProvider>
        <Routes>
          <Route path='/' element={<StoryblokPage />} />
          <Route path='/:lang/:slug' element={<StoryblokPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
        </Routes>
      </LanguageProvider>
    </div>
  );
}

export default App;
