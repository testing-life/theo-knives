import { SbBlokData, useStoryblok } from '@storyblok/react';
import Footer from 'components/molecules/footer/footer';
import MainNav from 'components/molecules/mainNav/MainNav';
import Product from 'components/molecules/product/product';
import Tabs from 'components/molecules/tabs/tabs';
import { useEffect, useState } from 'react';
import './portfolioPage.css';
import { toNoSpaceLowercase } from 'utils/string';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {
  FilterLabelsDictionary,
  LanguageCode,
  useLanguage,
} from 'context/languageContext';
import { getComponent } from 'utils/blok';
import { filterByTerm } from 'utils/filter';

const PortfolioPage = () => {
  const [nav, setNav] = useState();
  const [tabs, setTabs] = useState();
  const [products, setProducts] = useState<unknown[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<unknown[]>([]);
  const [param] = useSearchParams();
  const { language, setLanguage } = useLanguage();
  const { lang } = useParams();
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  const story = useStoryblok('/portfolio', {
    version: 'published',
    language: lang,
  });

  useEffect(() => {
    if (story.content) {
      const nav = getComponent(story, 'main-nav');
      const products = getComponent(story, 'product', true);
      const tabs = getComponent(story, 'tabs');
      if (nav) {
        setNav(nav);
      }
      if (tabs) {
        setTabs(tabs);
      }
      if (products) {
        setProducts(products);
        setFilteredProducts(products);
      }
    }
  }, [story.content]);

  const filterProducts = (filter: string) => {
    if (
      filter ===
      FilterLabelsDictionary[
        (lang as LanguageCode) || (language as LanguageCode)
      ].all
    ) {
      setFilteredProducts(products);
      return;
    }
    const newData = filterByTerm(
      products,
      filter,
      (lang as LanguageCode) || (language as LanguageCode)
    );

    setFilteredProducts(newData);
  };

  useEffect(() => {
    if (filteredProducts.length) {
      filterProducts(filter as string);
    }
  }, [, filteredProducts.length, filter]);

  useEffect(() => {
    if (param.has('model')) {
      const paramFilter = param.get('model');
      setFilter(paramFilter as string);
    }
  }, [param.has('model')]);

  useEffect(() => {
    if (lang && !language) {
      setLanguage(lang as LanguageCode);
    }
    if (language && language !== lang) {
      navigate(`/${language}/portfolio`, { replace: true });
    }

    if ((!filter && lang) || language) {
      setFilter(
        FilterLabelsDictionary[
          (lang as LanguageCode) || (language as LanguageCode)
        ].all
      );
    }
  }, [lang, language]);

  return (
    <>
      <main className='theo-page'>
        <section>
          {nav && <MainNav blok={nav} />}
          {tabs && (
            <Tabs
              blok={tabs}
              paramFilter={
                filter ||
                FilterLabelsDictionary[
                  (lang as LanguageCode) || (language as LanguageCode)
                ].all
              }
              onSelect={(value) => setFilter(value)}
            />
          )}
          <ul>
            {filteredProducts.map((product) => (
              <li key={(product as any)._uid} className='-mb-1rem'>
                <Product blok={product} />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioPage;
