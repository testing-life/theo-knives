import { useStoryblok, StoryblokComponent } from '@storyblok/react';
import './App.css';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import PortfolioPage from 'pages/portfolioPage/portfolioPage';
import {
  LanguageCode,
  LanguageProvider,
  useLanguage,
} from 'context/languageContext';
import { useEffect } from 'react';

const StoryblokPage = () => {
  let { slug, lang } = useParams<{ slug: string; lang: LanguageCode }>();
  slug = slug || 'home';
  const { language } = useLanguage();
  const navigate = useNavigate();

  const story = useStoryblok(slug, {
    version: 'draft',
    language: lang,
  });

  useEffect(() => {
    if (language && language !== lang) {
      navigate(`/${language}/${slug}`, { replace: true });
    }
  }, [language]);

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
          <Route path='/:lang/:slug' element={<StoryblokPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
        </Routes>
      </LanguageProvider>
    </div>
  );
}

export default App;
